import api from "../../api/axiosApi";
import type { DashboardResponse } from "./dashboard.types";

export async function getDashboard():Promise<DashboardResponse> {
    const response = await api.get("/dashboard")
    return response.data
}