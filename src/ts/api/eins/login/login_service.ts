import {api} from '../axiosInstance';
import type { LoginRequest, LoginResponse } from './login_request_response';

export const loginUser = async (credential : LoginRequest) : Promise<LoginResponse> => {
    const {data} = await api.post<LoginResponse>('/api/Auth/login',credential);
    return data;
}