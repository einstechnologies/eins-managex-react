import axios from "axios";
import { aesEncrypt, aesDecrypt } from "./aesEncryption";

// Read API URL from runtime config.js
const API_URL = window.__APP_CONFIG__?.API_URL;

if (!API_URL) {
  throw new Error("API_URL is not defined in config.js");
}

// Create ONE shared axios instance
export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ── Interceptor 2: ENCRYPT request body before sending to API ────────────────
//
// WHAT IT DOES:
// Before every POST/PUT/PATCH request, takes the plain JSON body
// and wraps it as: { "data": "encryptedBase64..." }
// The API's EncryptionMiddleware then decrypts it.
//
// SKIP CONDITIONS:
// → GET/DELETE requests (no body)
// → FormData requests (file uploads — handled separately)
// → Requests that already have "data" field (already encrypted)
// ─────────────────────────────────────────────────────────────────────────────
api.interceptors.request.use(async (config) => {
  const hasBody = config.data !== undefined && config.data !== null;
  const isFormData = config.data instanceof FormData;

  if (hasBody && !isFormData) {
    // Serialize body to JSON string if it is an object
    const bodyString =
      typeof config.data === "string"
        ? config.data
        : JSON.stringify(config.data);

    // Skip if already encrypted
    try {
      const parsed = JSON.parse(bodyString);
      if (parsed?.data && typeof parsed.data === "string") {
        return config; // already wrapped — skip
      }
    } catch {
      /* not JSON — continue */
    }

    // Encrypt the body
    const encryptedData = await aesEncrypt(bodyString);

    // Replace body with encrypted wrapper
    config.data = { data: encryptedData };
  }

  return config;
});

// ── Interceptor 3: DECRYPT response body after receiving from API ─────────────
//
// WHAT IT DOES:
// After every response, checks if it has { "data": "base64..." } format.
// If yes → decrypts it and replaces response.data with plain object.
// Your service files receive plain decrypted object — no changes needed there.
//
// SKIP CONDITIONS:
// → Responses that are not { "data": "base64..." } format
// → Already plain JSON (Swagger responses, health check, etc.)
// ─────────────────────────────────────────────────────────────────────────────
api.interceptors.response.use(
  async (response) => {
    const responseData = response.data;

    // Check if response is encrypted format: { "data": "base64string" }
    if (
      responseData &&
      typeof responseData === "object" &&
      typeof responseData.data === "string" &&
      responseData.data.length > 0
    ) {
      try {
        // Decrypt the response
        const decryptedString = await aesDecrypt(responseData.data);

        // Parse decrypted JSON string back to object
        response.data = JSON.parse(decryptedString);
      } catch {
        // Decryption failed — return as-is (not encrypted response)
        // This handles health-check or [SkipResponseEncryption] endpoints
      }
    }

    return response;
  },
  async (error) => {
    // Also decrypt error responses (validation errors, 401, 400, etc.)
    // API sends encrypted error responses too
    if (error.response?.data) {
      const responseData = error.response.data;

      if (
        responseData &&
        typeof responseData === "object" &&
        typeof responseData.data === "string" &&
        responseData.data.length > 0
      ) {
        try {
          const decryptedString = await aesDecrypt(responseData.data);
          error.response.data = JSON.parse(decryptedString);
        } catch {
          // Not encrypted error — leave as-is
        }
      }
    }

    return Promise.reject(error);
  },
);
