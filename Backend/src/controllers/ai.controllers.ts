import { Request, Response } from "express";
import { aiService } from "../services/ai.service";
import { ApiError } from "../utils/ApiError";
import { aiInsightService } from "../services/aiInsights.service";


const aiController = async (req:Request, res:Response) => {
    const userId = Number(req.user?.userId)
    const message:string = req.body.message
    
    const result = await aiService(userId, message)

    return res.status(200).json(result)
}

const aiInsightController = async(req:Request, res:Response) => {
    const userId = Number(req.user?.userId)

    const result = await aiInsightService(userId)

    return res.status(200).json(result)
}

export {aiController, aiInsightController}