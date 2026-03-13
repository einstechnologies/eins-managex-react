import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserService } from "../../../ts/api/eins/user/update_user/update_user_service";
import { AxiosError } from "axios";
import type { UpdateUserRequest, UpdateUserResponse } from "../../../ts/api/eins/user/update_user/update_user_response";

type UpdateUserVariables = {
    userId: string;
    payload: UpdateUserRequest;
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation<UpdateUserResponse, AxiosError, UpdateUserVariables>({
        mutationFn: ({ userId, payload }) => updateUserService(userId, payload),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            console.log("Updated userId:", data.userId);
        },
        onError: (error) => {
            console.error("Update failed:", error.response?.data ?? error.message);
            console.error("Update failed:", error.response?.status ?? error.message);
        },
    });
}