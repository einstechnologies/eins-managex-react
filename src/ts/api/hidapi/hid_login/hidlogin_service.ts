import { hidApi } from "../hidaxiosinstance";
import type {
  hidLoginRequest,
  hidLoginResponse,
} from "./hidlogin_request_response";

export const hidLogin = async (
  ipAddress: string,
  credentials: hidLoginRequest,
): Promise<hidLoginResponse> => {
  const api = hidApi(ipAddress);

  const { data } = await api.post<hidLoginResponse>("", credentials);

  return data;
};
