export type DeviceCredentialRequest = {
    HIDDeviceUserName: string;
    HIDDeviceUserPassword: string;
    DeviceId: bigint;
}

export type DeviceCredentialResponse = {
    HidDeviceLoginId: bigint;
}