import type { RemoveUserImageRequest, RemoveUserImageResponse } from "./remove_user_image_response";
import { api } from "../../axiosInstance";

export const removeUserImageServcie = async (request: RemoveUserImageRequest): Promise<RemoveUserImageResponse> => {
    const { data } = await api.post<RemoveUserImageResponse>(
        `api/User/remove-user-image`,
        request,
    );
    return data;
}