import { useMutation } from "@tanstack/react-query";
import { hidLogin } from "../../../ts/api/hidapi/hid_login/hidlogin_service";
import type { hidLoginRequest } from "../../../ts/api/hidapi/hid_login/hidlogin_request_response";

export const usehidLogin = () => {
  return useMutation({
    mutationFn: ({
      ipAddress,
      credentials,
    }: {
      ipAddress: string;
      credentials: hidLoginRequest;
    }) => hidLogin(ipAddress, credentials),
    onSuccess: async (data) => {
      localStorage.setItem("hidtoken", data.session);
      localStorage.setItem("hidip", data.ipaddress);
      await new Promise((resolve) => setTimeout(resolve, 800));
      // Push a blocker entry BEFORE replacing with Home
    },
  });
};
