import { useQuery } from "@tanstack/react-query";
import { getUserDetailsService } from "../../../ts/api/eins/user/get_user_detail/get_user_detail_service";
import type { UserQueryParams } from "../../../ts/api/eins/user/get_user_detail/get_user_detail_response";


export const USERS_KEYS = {
    all: ["users"] as const,
    filtered: (params: UserQueryParams) => ["users", params] as const,
};

export const useGetUserDetails = (params: UserQueryParams = {}) => {
    return useQuery({
        queryKey: USERS_KEYS.filtered(params),
        queryFn: () => getUserDetailsService.getUsers(params),
        staleTime: 1000 * 60 * 5,
    });
}