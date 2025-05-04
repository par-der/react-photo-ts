import axios from "axios";
import {API_BASE_URL, API_TOKEN_KEY} from "../constants/api.ts";
import {useAuthStore} from "../stores/auth-store.ts";

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config) => {
    const {token} = useAuthStore.getState();

    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }

    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const tokenFromLocalStorage = API_TOKEN_KEY ? localStorage.getItem(API_TOKEN_KEY) : null;

            if (tokenFromLocalStorage) {
                useAuthStore.setState({token: tokenFromLocalStorage, isAuthenticated: true});
            }
        }

        return Promise.reject(error);
    }
);