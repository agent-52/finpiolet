import { NextFunction, Request, RequestHandler, Response } from "express"

export const asyncHandler = (controller:RequestHandler):RequestHandler => {

    return (
        (req:Request, res:Response, next:NextFunction) =>{
            Promise
                .resolve(controller(req, res, next))
                .catch(err => {
                    next(err)
                })
        }
    )
}