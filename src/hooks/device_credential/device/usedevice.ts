// import { useMutation } from "@tanstack/react-query";
// import { deviceUser } from "../../../ts/api/device_details/device_details_service";
// import type { DeviceRequest } from "../../../ts/api/device_details/device_details_request_response";

// export const useDevice = () => {
//     return useMutation({
//         mutationFn: (data: DeviceRequest) => deviceUser(data),

//         onSuccess: () => {
//             console.log("Device saved successfully");
//         },

//         onError: (error) => {
//             console.error("Error saving device", error);
//         }
//     });
// };

import { useMutation } from "@tanstack/react-query";
import { deviceUser } from "../../../ts/api/device_details/device_details_service";
import type { DeviceRequest } from "../../../ts/api/device_details/device_details_request_response";


export const usedevice = () => {


    return useMutation({
        mutationFn: (credentials: DeviceRequest) =>
            deviceUser(credentials),

        onSuccess: async () => {
            await new Promise((resolve) => setTimeout(resolve, 800));

        }
    });
};