import { api } from "../../axiosInstance";
import type {
  DeviceRequest,
  DeviceResponse,
  GetDeviceDetailsResponse,
} from "./device_details_request_response";

export const deviceUser = async (
  credential: DeviceRequest,
): Promise<DeviceResponse> => {
  const { data } = await api.post<DeviceResponse>(
    "/api/Device/register-device",
    credential,
  );

  return data;
};

export const GetConfiuredDevice = async (): Promise<
  GetDeviceDetailsResponse[]
> => {
  const { data } = await api.get<GetDeviceDetailsResponse[]>(
    "/api/Device/get-all-device-detail",
  );
  return data;
};
