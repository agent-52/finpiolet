import { Request, Response } from "express";
import { aiService } from "../services/ai.service";
import { ApiError } from "../utils/ApiError";


const aiController = async (req:Request, res:Response) => {
    const userId = Number(req.user?.userId)
    const message:string = req.body.message
    
    const result = await aiService(userId, message)

    return res.status(200).json(result)
}

export {aiController}