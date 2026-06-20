import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
      };
    }
  }
}

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const extractedToken = accessToken.split(" ")[1];
  if (!extractedToken) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
  try {
    const userId = verifyAccessToken(extractedToken).userId;

    req.user = {
      userId: userId,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};
export { authMiddleware };
