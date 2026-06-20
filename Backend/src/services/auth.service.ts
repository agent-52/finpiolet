import {
  createUser,
  deleteRefreshToken,
  findRefreshTokenn,
  findUserByEmail,
  storeRefreshToken,
} from "../repositories/auth.repository";
import * as bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt";

async function signUp(email: string, password: string, name: string) {
  const userExists = await findUserByEmail(email);
  if (userExists) {
    throw new Error("Account with this email already present , please signin");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await createUser(name, email, hashedPassword);

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);

  await storeRefreshToken(user.id, refreshToken, expiryDate);

  return {
    user,
    accessToken,
    refreshToken,
  };
}

async function signIn(email: string, password: string) {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("no user found with this email , please signup first");
  }

  if (user.provider == "GOOGLE") {
    throw new Error("This account uses Google sign in");
  }

  if (!user.password) {
    throw new Error("Account configuration error : no password found");
  }

  const passwordMatched = await bcrypt.compare(password, user.password);

  if (!passwordMatched) {
    throw new Error("invalid password");
  }

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);

  await storeRefreshToken(user.id, refreshToken, expiryDate);

  return {
    user,
    accessToken,
    refreshToken,
  };
}

async function RefreshAccessToken(refreshToken: string) {
  try {
    verifyRefreshToken(refreshToken);
  } catch {
    throw new Error("Unauthorized");
  }
  const userId = verifyRefreshToken(refreshToken).userId;
  const tokenExist = await findRefreshTokenn(refreshToken);
  if (!tokenExist) {
    throw new Error("unauthorized");
  }
  const accessToken = generateAccessToken(userId);

  return { accessToken };
}

async function logout(refreshToken: string) {
  const tokenExists = await findRefreshTokenn(refreshToken);
  if (!tokenExists) {
    throw new Error("no token exists ");
  }
  await deleteRefreshToken(refreshToken);
}

export { signUp, signIn, RefreshAccessToken, logout };
