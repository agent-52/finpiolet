import api from "../../api/axiosApi";
import type { LoginFormData } from "./schemas/login.schema";

export async function login(data: LoginFormData) {
    const response = await api.post("/auth/signin", data);

    return response.data;
}

export async function logout() {
    await api.post("/auth/logout");
}

export async function getCurrentUser() {
    const response = await api.get("/auth/me");

    return response.data;
}