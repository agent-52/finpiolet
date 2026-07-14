import { Request, Response } from "express";
import { getAnalytics } from "../engines/analytics.engine";

export const getAnalyticsController = async (req:Request, res:Response) =>{
    const userId = Number(req.user?.userId);

    const analytics = await getAnalytics(userId)

    return res.status(200).json({
        analytics
    })
}