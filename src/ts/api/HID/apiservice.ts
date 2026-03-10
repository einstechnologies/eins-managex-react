import axios from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";

let api: AxiosInstance | null = null;

export const createApiInstance = (ip: string): AxiosInstance => {

    api = axios.create({
        baseURL: `http://${ip}/hidlogin.fcgi`,
        headers: {
            "Content-Type": "application/json",
        }
    });

    api.interceptors.request.use((config: InternalAxiosRequestConfig) => {

        const session = localStorage.getItem("hidtoken");

        // attach session only after login
        if (session && config.headers && !config.baseURL?.includes("hidlogin.fcgi")) {
            config.headers["Session"] = session;
        }
        //&& !config.url?.includes("hidlogin.fcgi")
        return config;
    });

    return api;
};

export const getApi = (): AxiosInstance | null => api;