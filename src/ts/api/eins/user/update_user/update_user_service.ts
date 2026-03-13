import type { UpdateUserRequest, UpdateUserResponse } from "./update_user_response";
import { api } from "../../axiosInstance";

export const updateUserService = async (userid: string, payload: UpdateUserRequest): Promise<UpdateUserResponse> => {
    const { data } = await api.put<UpdateUserResponse>(
        'api/User/update-user',
        payload,
        {
            params:
            {
                userid: userid
            }
        });
    return data;
}