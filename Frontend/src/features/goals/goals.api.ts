import api from "../../api/axiosApi";
import type { GoalData, GoalGetResponse, GoalPlanResponse, GoalResponse } from "./goals.types";

export async function creategoal(data:GoalData):Promise<GoalResponse> {
    const response = await api.post("/goal", data)
    return response.data
}

export async function updateGoal(data:{id:number, goalData:Partial<GoalData>}):Promise<GoalResponse> {
    const response = await api.patch(`/goal/:${data.id}`, data.goalData)
    return response.data
}

export async function deleteGoal(id:number) :Promise<GoalResponse>{
    const response = await api.delete(`/goal/:${id}`)
    return response.data
}

export async function getGoals() :Promise<GoalGetResponse>{
    const response = await api.get("/goal")
    return response.data
}

export async function getGoalPlan(id:number|null) :Promise<GoalPlanResponse|null>{
    if(id){
        const response = await api.get(`/goal/:${id}/plan`)
        return response.data
    }
    return null
}