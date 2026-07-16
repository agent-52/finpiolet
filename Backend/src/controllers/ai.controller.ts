import { Request, Response } from "express";
import { aiServie } from "../services/ai.service";
import { ApiError } from "../utils/ApiError";


const aiConroller = async (req:Request, res:Response) => {
    const userId = Number(req.user?.userId)
    const message:string = req.body.message
    if(message.length == 0){
        throw new ApiError(400, "message should be at least one character long")
    }
    const result = await aiServie(userId, message)

    return res.status(200).json(result)
}

export {aiConroller}