// ─────────────────────────────────────────────────────────────────────────────
// AES-256-GCM Encryption/Decryption using Web Crypto API (built into browser)
// No external library needed — uses native browser SubtleCrypto
//
// This must match EXACTLY with:
//   → AesEncryptionService.cs in Infrastructure/Services/
//   → Encryption:SecretKey in appsettings.json
//
// ALGORITHM DETAILS:
//   → AES-256-GCM (authenticated encryption)
//   → Key derivation: PBKDF2-SHA256 with 100,000 iterations
//   → Random 16-byte salt per encryption call
//   → Random 12-byte nonce (GCM IV) per encryption call
//   → Output: Base64(Salt[16] + Nonce[12] + CipherText + AuthTag[16])
// ─────────────────────────────────────────────────────────────────────────────

// ⚠️ MUST match Encryption:SecretKey in appsettings.json exactly
const SECRET_KEY = "YourSuperSecretEncryptionKey@ManageX2026!@#$%";   // ← replace with your actual key

const SALT_SIZE = 16;
const NONCE_SIZE = 12;
const TAG_SIZE = 16;
const ITERATIONS = 100_000;

// ── NEW (fix — cast buffer to ArrayBuffer) ────────────────────────────
const toBytes = (str: string): ArrayBuffer =>
    new TextEncoder().encode(str).buffer as ArrayBuffer;

// ── Helper: Uint8Array → Base64 string ───────────────────────────────────────
const toBase64 = (bytes: Uint8Array): string =>
    btoa(String.fromCharCode(...bytes));

// ── Helper: Base64 string → Uint8Array ───────────────────────────────────────
const fromBase64 = (b64: string): Uint8Array =>
    new Uint8Array(atob(b64).split('').map(c => c.charCodeAt(0)));

// ── Derive AES-256 key from SECRET_KEY + salt using PBKDF2 ───────────────────
const deriveKey = async (salt: Uint8Array): Promise<CryptoKey> => {
    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        toBytes(SECRET_KEY),
        { name: 'PBKDF2' },
        false,
        ['deriveKey']
    );

    return crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt: salt.buffer as ArrayBuffer,   // ← ADD "as ArrayBuffer" here ✅
            iterations: ITERATIONS,
            hash: 'SHA-256'
        },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
    );
};


// ── ENCRYPT ───────────────────────────────────────────────────────────────────
// Input:  any plain text string
// Output: Base64 string containing Salt + Nonce + CipherText + AuthTag
export const aesEncrypt = async (plaintext: string): Promise<string> => {
    if (!plaintext) return plaintext;

    // Generate random salt (16 bytes) and nonce (12 bytes)
    const salt = crypto.getRandomValues(new Uint8Array(SALT_SIZE));
    const nonce = crypto.getRandomValues(new Uint8Array(NONCE_SIZE));

    // Derive AES key from SECRET_KEY + salt
    const key = await deriveKey(salt);

    // AES-256-GCM encrypt
    // Note: Web Crypto appends 16-byte auth tag to end of ciphertext automatically
    const encryptedBuffer = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: nonce, tagLength: TAG_SIZE * 8 },
        key,
        toBytes(plaintext)
    );

    // Web Crypto returns: CipherText + AuthTag (16 bytes) combined
    const encryptedBytes = new Uint8Array(encryptedBuffer);

    // Combine: Salt(16) + Nonce(12) + CipherText+Tag
    const combined = new Uint8Array(
        SALT_SIZE + NONCE_SIZE + encryptedBytes.length
    );
    combined.set(salt, 0);
    combined.set(nonce, SALT_SIZE);
    combined.set(encryptedBytes, SALT_SIZE + NONCE_SIZE);

    return toBase64(combined);
};

// ── DECRYPT ───────────────────────────────────────────────────────────────────
// Input:  Base64 string from API response (Salt + Nonce + CipherText + AuthTag)
// Output: plain text string
export const aesDecrypt = async (encryptedBase64: string): Promise<string> => {
    if (!encryptedBase64) return encryptedBase64;

    const combined = fromBase64(encryptedBase64);

    // Extract components by known byte positions
    const salt = combined.slice(0, SALT_SIZE);
    const nonce = combined.slice(SALT_SIZE, SALT_SIZE + NONCE_SIZE);
    const ciphertext = combined.slice(SALT_SIZE + NONCE_SIZE); // includes auth tag

    // Re-derive the same AES key using same salt
    const key = await deriveKey(salt);

    // AES-256-GCM decrypt — auto-verifies auth tag
    const decryptedBuffer = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: nonce, tagLength: TAG_SIZE * 8 },
        key,
        ciphertext
    );

    return new TextDecoder().decode(decryptedBuffer);
};
