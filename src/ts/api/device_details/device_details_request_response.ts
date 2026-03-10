export type DeviceRequest = {
    DeviceName: string;
    DeviceModel: string;
    DeviceType: string;
    IsPortForward: boolean;
    Mode: string;
    TerminalID: string;
    IPAddress: string;
    SubnetMask: string;
    GatewayAddress: string;
    PortNo: string;
    GateName: string;
    MACAddress: string;
    ServerIP: string;
    Status: boolean;
    PrimaryDNS: string;
    SecondaryDNS: string;
    FirmwareVersion: string;
    SerialNumber: string;
    ListeningPort: number;
}

export type DeviceResponse = {
    DeviceId: bigint;
}