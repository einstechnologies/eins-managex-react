import { api } from "../../axiosInstance";
import type { GetDeviceDetailsResponse } from "./get_deviceDetails_response";

export const GetConfiuredDevice = async (): Promise<
  GetDeviceDetailsResponse[]
> => {
  const { data } = await api.get<GetDeviceDetailsResponse[]>(
    "/api/Device/get-all-device-detail",
  );
  return data;
};
