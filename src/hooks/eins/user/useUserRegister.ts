import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userRegisterService } from "../../../ts/api/eins/user/user_register/user_register_service";
import type { UserRegisterRequest } from "../../../ts/api/eins/user/user_register/user_register_response";

export const useUserRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: UserRegisterRequest) => userRegisterService(request),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      console.log("Updated userId:", data.userId);
    },
  });
}