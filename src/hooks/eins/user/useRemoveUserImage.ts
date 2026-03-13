import type { RemoveUserImageRequest } from "../../../ts/api/eins/user/remove_user_image/remove_user_image_response";
import { removeUserImageServcie } from "../../../ts/api/eins/user/remove_user_image/remove_user_image_service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRemoveUserImage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (request: RemoveUserImageRequest) => removeUserImageServcie(request),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            console.log("Removed image for userId:", data.userId);
        },
    });
}