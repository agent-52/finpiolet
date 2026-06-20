import { Request, Response } from "express";
import {
  logout,
  RefreshAccessToken,
  signIn,
  signUp,
} from "../services/auth.service";
import { findUserById } from "../repositories/auth.repository";

const signupController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const signUpResponse = await signUp(email, password, name);

  res.cookie("refreshToken", signUpResponse.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  return res.json({
    success: true,
    user: signUpResponse.user,
    accessToken: signUpResponse.accessToken,
  });
};

const signinController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const signInResponse = await signIn(email, password);
  res.cookie("refreshToken", signInResponse.refreshToken);
  return res.json({
    success: true,
    user: signInResponse.user,
    accessToken: signInResponse.accessToken,
  });
};

const refreshController = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  const refreshResponse = await RefreshAccessToken(refreshToken);

  return res.json({
    accessToken: refreshResponse.accessToken,
  });
};

const logoutController = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  await logout(refreshToken);
  res.clearCookie("refreshToken");
  return res.status(200).json({
    success: true,
    message: "logged out successfully",
  });
};

const getCurrentUser = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(404).json({
      message: "no userId present",
    });
  }
  const user = await findUserById(userId);
  return res.status(200).json({
    success: true,
    user: {
      id: user?.id,
      name: user?.name,
      email: user?.email,
    },
  });
};

export {
  signupController,
  signinController,
  refreshController,
  logoutController,
  getCurrentUser,
};
