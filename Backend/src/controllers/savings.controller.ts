import { Request, Response } from "express";
import { savingPlannerEngine } from "../engines/savingPlanner.engine";
import { ApiError } from "../utils/ApiError";

const savingPlannerController = async (req:Request, res:Response) => {
    const userId = Number(req.user?.userId)
    const targetAdditionalSaving = req.body.targetAdditionalSaving

    if(targetAdditionalSaving<=0){
        throw new ApiError(400, "target savings must be more than 0")
    }

    const result = await savingPlannerEngine(userId, targetAdditionalSaving)
    return res.status(200).json(result)
}

export {
    savingPlannerController
}