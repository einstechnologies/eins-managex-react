import { api } from "../axiosInstance";
import type {
    DeviceRequest,
    DeviceResponse
} from "./device_details_request_response";

export const deviceUser = async (
    credential: DeviceRequest
): Promise<DeviceResponse> => {

    const { data } = await api.post<DeviceResponse>(
        "/api/Device/register-device",
        credential
    );

    return data;
};