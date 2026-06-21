import {
  createUser,
  deleteRefreshToken,
  findRefreshTokenn,
  findUserByEmail,
  storeRefreshToken,
  updateUserProvider,
} from "../repositories/auth.repository";
import * as bcrypt from "bcrypt";
import {
  createAuthSession,
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt";
import { verifyGoogleToken } from "../utils/google";

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

async function googleAuthService(googleToken: string) {
  const googlePayload = await verifyGoogleToken(googleToken);
  if (!googlePayload.email) {
    throw new Error("no email found in google payload");
  }
  const userExists = await findUserByEmail(googlePayload.email);

  if (userExists && userExists.provider == "LOCAL") {
    const updatedUser = await updateUserProvider(
      googlePayload.email,
      "GOOGLE",
      googlePayload.sub,
      googlePayload.picture,
    );

    const authSession = await createAuthSession(userExists.id);

    return {
      user: userExists,
      ...authSession,
    };
  }

  if (!googlePayload.name) {
    throw new Error("no name found in google payload");
  }

  if (!userExists) {
    const user = await createUser(
      googlePayload.name,
      googlePayload.email,
      null,
      "GOOGLE",
      googlePayload.sub,
    );

    const authSession = await createAuthSession(user.id);

    return {
      user,
      ...authSession,
    };
  }

  if (userExists && userExists.provider == "GOOGLE") {
    const authSession = await createAuthSession(userExists.id);
    return {
      user: userExists,
      ...authSession,
    };
  }
}

export { signUp, signIn, RefreshAccessToken, logout, googleAuthService };
