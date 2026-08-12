import axios from "axios";
import { clearAccessToken, getAccessToken, setAccessToken } from "../lib/token";
import { logout, refreshToken } from "../features/auth/api";



const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const token = getAccessToken();
    console.log("axios interceptor ran and set this token:", token)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

api.interceptors.response.use(
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