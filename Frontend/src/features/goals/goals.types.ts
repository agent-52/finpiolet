import type { GoalStatus } from "../dashboard/dashboard.types";

export type GoalData = {
title: string;
    targetAmount: number;
    currentSavedAmount: number;
    targetDate: string;
    notes?:string;
}

export interface GoalResponse{
    success:boolean;
    goal:Goal
}

export interface GoalGetResponse{
    success:boolean;
    goals:Goal[]
}

export interface GoalPlan{
    goal:string;
        targetAmount:number;
        savedAmount:number;
        remainingAmount:number;
        progressPercentage:number;
        monthsRemaining:number;
        requiredMonthlySaving:number;
        status:GoalStatus

}

export interface GoalPlanResponse{
    success:boolean;
    goalPlan:GoalPlan;
}



export type Goal = {
 title: string;
 targetAmount: number;
 status:GoalStatus
 currentSavedAmount: number;
 targetDate: Date;
 createdAt: Date;
 updatedAt: Date;
 id: number;
 userId: number;

}