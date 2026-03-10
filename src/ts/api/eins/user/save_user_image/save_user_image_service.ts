import { api } from "../../axiosInstance";
import type {
  SaveUserImageRequest,
  SaveUserImageResponse,
} from "./save_user_image_response";

export const uploadUserImage = async (
  request: SaveUserImageRequest,
): Promise<SaveUserImageResponse> => {
  const formData = new FormData();
  formData.append("image", request.image);
  formData.append("userId", request.userId);
  const { data } = await api.post<SaveUserImageResponse>(
    `api/User/save-user-image`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return data;
};
