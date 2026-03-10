import { useMutation } from "@tanstack/react-query";
import { GetConfiuredDevice } from "../../../../ts/api/eins/device/device_details/get_deviceDetails_service";

export const GetConfiuredDevicelist = () => {
  return useMutation({
    mutationFn: () => GetConfiuredDevice(),
    onSuccess: async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
    },
  });
};
