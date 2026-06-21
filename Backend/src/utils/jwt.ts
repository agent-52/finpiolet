import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { env } from "../config/env";
import { storeRefreshToken } from "../repositories/auth.repository";

type JwtPayload = { userId: number };

function generateAccessToken(userId: number): string {
  if (!env.JWT_SECRET) {
    throw new Error("JWT_SECRET not accesseble");
  }
  const accessToken = jwt.sign({ userId: userId }, env.JWT_SECRET, {
    expiresIn: "20m",
  });
  return accessToken;
}

function generateRefreshToken(userId: number): string {
  if (!env.JWT_REFRESH_SECRET) {
    throw new Error("JWT_REFRESH_SECRET not accesseble");
  }
  const refreshToken = jwt.sign({ userId }, env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });

  return refreshToken;
}

function verifyAccessToken(token: string): JwtPayload {
  if (!env.JWT_SECRET) {
    throw new Error("JWT_SECRET not accesseble");
  }
  const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
  return decoded;
}

function verifyRefreshToken(token: string): JwtPayload {
  if (!env.JWT_REFRESH_SECRET) {
    throw new Error("JWT_REFRESH_SECRET not accesseble");
  }

  const decoded = jwt.verify(token, env.JWT_REFRESH_SECRET) as JwtPayload;
  return decoded;
}

async function createAuthSession(userId: number) {
  const accessToken = generateAccessToken(userId);
  const refreshToken = generateRefreshToken(userId);
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);
  await storeRefreshToken(userId, refreshToken, expiryDate);

  return {
    accessToken,
    refreshToken,
  };
}
export {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  createAuthSession,
};
