import { useMutation } from "@tanstack/react-query";
import { userRegisterService } from "../../../ts/api/eins/user/user_register/user_register_service";
import type { UserRegisterRequest } from "../../../ts/api/eins/user/user_register/user_register_response";

export const useUserRegister = () => {
  return useMutation({
    mutationFn: (request: UserRegisterRequest) => userRegisterService(request),
  });
};
