import axios from "axios";


// This creates ONE shared axios "client" for your whole app.
// baseURL is read from your .env file.
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers : {'Content-Type':'application/json'}
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});