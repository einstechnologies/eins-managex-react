// Inside ts/folderA/folderC/someFile.ts
import { api } from "../../axiosInstance";
import type {
  UserRegisterRequest,
  UserRegisterResponse,
} from "./user_register_response";

export const userRegisterService = async (
  request: UserRegisterRequest,
): Promise<UserRegisterResponse> => {
  const { data } = await api.post<UserRegisterResponse>(
    "api/User/register-user",
    request,
  );
  return data;
};
