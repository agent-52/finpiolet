import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

export const errorHandlerMiddleware =  (err:any, req:Request, res:Response, next:NextFunction) =>{
    let statusCode
    let message
    if(err instanceof ApiError){
        statusCode = err.statusCode
        message = err.message
    }else{
        statusCode = 500
        message = "Internal server error"
    }
     
    return res.status(statusCode).json({
        success:false,
        message
    })
}