import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadUserImage } from "../../../ts/api/eins/user/save_user_image/save_user_image_service";
import type { SaveUserImageRequest } from "../../../ts/api/eins/user/save_user_image/save_user_image_response";

export const useUploadUserImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: SaveUserImageRequest) => uploadUserImage(request),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      console.log(data.userId);
    },
  });
};
