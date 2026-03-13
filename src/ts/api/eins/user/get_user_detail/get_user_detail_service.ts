import { api } from '../../axiosInstance';
import type { Users, UserQueryParams } from './get_user_detail_response';

export const getUserDetailsService = {
    getUsers: async (params: UserQueryParams): Promise<Users[]> => {
        const { data } = await api.get("api/User/get-user-details", {
            params: {
                ...(params.bioUserId && { bioUserId: params.bioUserId }),
                ...(params.firstName && { firstName: params.firstName }),
                ...(params.lastName && { lastName: params.lastName }),
            }
        });
        return data;
    }
}