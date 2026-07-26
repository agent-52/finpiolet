import api from "../../api/axiosApi";
import type { CurrentUserResponse, LogoutResponse, RefreshResponse, SigninResponse, SignupRespone } from "./auth.types";
import type { SignupFomData, SigninFormData } from "./schemas/login.schema";

export async function signin(data: SigninFormData):Promise<SigninResponse> {
    const response = await api.post("/auth/signin", data);

    return response.data;
}
export async function signup(data:SignupFomData):Promise<SignupRespone> {
    const response = await api.post("/auth/signup", data);

    return response.data
}

export async function refreshToken():Promise<RefreshResponse> {
    const response = await api.post("/auth/refresh")
    return response.data
}
export async function logout():Promise<LogoutResponse> {
    const response = await api.post("/auth/logout");

    return response.data
}

export async function getCurrentUser():Promise<CurrentUserResponse> {
    const response = await api.get("/auth/me");

    return response.data;
}