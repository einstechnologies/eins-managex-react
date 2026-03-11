import { useQuery } from "@tanstack/react-query";
import { GetConfiuredDevice } from "../../../../ts/api/eins/device/device_details/get_deviceDetails_service";

export const GetConfiuredDevicelist = () => {
  return useQuery({
    queryKey: ["configuredDevices"],
    queryFn: () => GetConfiuredDevice(),
    staleTime: 1000 * 60 * 2,
  });
};
