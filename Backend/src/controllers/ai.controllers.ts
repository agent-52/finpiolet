import { Request, Response } from "express";
import { aiService } from "../services/ai.service";
import { ApiError } from "../utils/ApiError";
import { aiInsightService, getLatestInsightService } from "../services/aiInsights.service";
import { generateAiBudgetWarningService, generateAiGoalProgressServie, generateAiMonthlySummaryService, generateAiSavingPlannerExplanationService } from "../services/aiInsightsMiniServices";


const aiController = async (req:Request, res:Response) => {
    const userId = Number(req.user?.userId)
    const message:string = req.body.message
    
    const result = await aiService(userId, message)

    return res.status(200).json(result)
}

const aiInsightController = async(req:Request, res:Response) => {
    const userId = Number(req.user?.userId)

    const result = await getLatestInsightService(userId)

    return res.status(200).json(result)
}

const aiMonthlySummaryController = async(req:Request, res:Response) => {
    const userId = Number(req.user?.userId)

    const result = await generateAiMonthlySummaryService(userId)

    return res.status(200).json(result)
}

const aiBudgetWarningController = async(req:Request, res:Response) => {
    const userId = Number(req.user?.userId)

    const result = await generateAiBudgetWarningService(userId)

    return res.status(200).json(result)

}

const aiGoalProgressController = async(req:Request, res:Response) => {
    const userId = Number(req.user?.userId)

    const result = await generateAiGoalProgressServie(userId)

    return res.status(200).json(result)

}

const aiSavingPlanExplainerController = async(req:Request, res:Response) => {
    const userId = Number(req.user?.userId)
    const targetAdditionalSaving = Number(req.body.targetAdditionalSaving)
    
    const result = await generateAiSavingPlannerExplanationService(userId, targetAdditionalSaving)

    return res.status(200).json(result)

}


export {aiController, aiInsightController, aiMonthlySummaryController, aiBudgetWarningController, aiGoalProgressController, aiSavingPlanExplainerController}