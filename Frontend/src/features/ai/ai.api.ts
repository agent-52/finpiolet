import api from "../../api/axiosApi";

export async function  getAiInsights() :Promise<AiInsightsResponse>{
    const response = await api.get("/ai/insights")
    return response.data
}

export async function getAiMonthlySummary():Promise<AiMonthlySummaryResponse> {
    const response = await api.get("/ai/monthly-summary")
    return response.data
}

export async function getAiBudgetWarnings() :Promise<AiBudgetWarningsResponse>{
    const response = await api.get("/ai/budget-warnings")
    return response.data
}

export async function getAiGoalProgerss():Promise<AiGoalProgressResponse> {
    const response = await api.get("/ai/goal-progress")
    return response.data
}

export async function getSavingPlannerExplanation(data:{targetAdditionalSaving:number}):Promise<AiSavingPlannerExplanationResponse> {
    const response = await api.post("/ai/saving-planner-explanation", data)
    return response.data
}