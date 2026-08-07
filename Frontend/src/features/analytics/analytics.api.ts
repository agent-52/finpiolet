import api from "../../api/axiosApi";
import type { AnalyticsResponse } from "./analytics.types";


export async function getAnalytics():Promise<AnalyticsResponse> {
    const response = await api.get("/analytics")
    return response.data
}