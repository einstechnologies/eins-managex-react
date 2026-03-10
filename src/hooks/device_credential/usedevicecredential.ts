import { useMutation } from "@tanstack/react-query";
import { deviceUsercreds } from "../../ts/api/device_credential/device_credential_service";
import type { DeviceCredentialRequest } from "../../ts/api/device_credential/device_credential_request_response";


export const usedeviceLogin = () => {


    return useMutation({
        mutationFn: (credentials: DeviceCredentialRequest) =>
            deviceUsercreds(credentials),

        onSuccess: async () => {
            await new Promise((resolve) => setTimeout(resolve, 800));

        }
    });
};