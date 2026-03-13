import { api } from "../../axiosInstance";
import type {
  DeviceCredentialRequest,
  DeviceCredentialResponse,
} from "./device_credential_request_response";

export const deviceUsercreds = async (
  credential: DeviceCredentialRequest,
): Promise<DeviceCredentialResponse> => {
  const { data } = await api.post<DeviceCredentialResponse>(
    "/api/Device/hid-device-login",
    credential,
  );
  return data;
};
