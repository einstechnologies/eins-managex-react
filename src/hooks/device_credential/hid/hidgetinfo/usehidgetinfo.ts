
import { useMutation } from "@tanstack/react-query"

import type { HidGetInfoResponse } from "../../../../ts/api/HID/getinfo/hidgetinfo_request_response"
import { hidGetInfo } from "../../../../ts/api/HID/getinfo/hidgetinfo_service"

export const useHidGetInfo = () => {

    return useMutation<
        HidGetInfoResponse,
        Error,
        { host: string; session: string }>({
            mutationFn: ({ host, session }) => hidGetInfo(host, session)
        })

}