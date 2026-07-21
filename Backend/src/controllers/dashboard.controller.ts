import { Request, Response } from "express";

import { getDashboard } from "../engines/dashboard.engine";


export const getDashboardController = async (req:Request, res:Response) => {
    const userId = Number(req.user?.userId)
        
        const result = await getDashboard(userId)
        
        return res.status(200).json(result)
}