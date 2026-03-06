import { useMutation } from "@tanstack/react-query";
import { uploadUserImage } from "../../ts/api/user/save_user_image/save_user_image_service";
import type { SaveUserImageRequest } from "../../ts/api/user/save_user_image/save_user_image_response";

export const useUploadUserImage = () => {
    return useMutation({
        mutationFn: (request: SaveUserImageRequest) => uploadUserImage(request),
    });
}