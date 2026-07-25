import api from "../../api/axiosApi";
import type { SignupFomData, SigninFormData } from "./schemas/login.schema";

export async function signin(data: SigninFormData) {
    const response = await api.post("/auth/signin", data);

    return response.data;
}
export async function signup(data:SignupFomData) {
    const response = await api.post("/auth/signup", data);

    return response.data
}

export async function refreshToken() {
    const response = await api.post("/auth/refresh")
    return response.data
}
export async function logout() {
    const response = await api.post("/auth/logout");

    return response.data
}

export async function getCurrentUser() {
    const response = await api.get("/auth/me");

    return response.data;
}