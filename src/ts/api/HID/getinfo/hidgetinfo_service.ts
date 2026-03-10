import axios from "axios"
import type { HidGetInfoResponse } from "./hidgetinfo_request_response"

export const hidGetInfo = async (
    host: string,
    session: string
): Promise<HidGetInfoResponse> => {

    const response = await axios.get(
        `${host}/system_information.fcgi?session=${session}`
    )

    return response.data
}