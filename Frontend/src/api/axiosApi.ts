import axios from "axios";
import { clearAccessToken, getAccessToken, setAccessToken } from "../lib/token";
import { logout, refreshToken } from "../features/auth/api";



const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

axios.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

axios.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config

        if(originalRequest._retry){
            return Promise.reject(error)
        }
        //401 error handle
        
        if(error.response?.status == 401 && !originalRequest._retry){
            originalRequest._retry = true
            try {
                const data = await refreshToken()
                if(data.accessToken){
                    setAccessToken(data.accessToken)
                    originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
                    //retrying original request
                    return api(originalRequest) 
                }
            } catch (error) {
                clearAccessToken()
                logout()
                return Promise.reject(error)
            }
        }

        return Promise.reject(error)
    }
)

export default api;