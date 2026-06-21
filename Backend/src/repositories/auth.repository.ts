import { prisma } from "../config/prisma";
import { AuthProvider } from "../generated/prisma/enums";

async function findUserByEmail(email: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Error in running findUserByEmail function");
  }
}

async function findUserById(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Error in running findUserById function");
  }
}

async function createUser(
  name: string,
  email: string,
  password: string | null,
  provider: AuthProvider = "LOCAL",
  providerId: string | null = null,
) {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        provider,
        providerId,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Error in running createUser function");
  }
}

async function findUserByProviderId(providerId: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        providerId,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Error in running findUserByProviderId function");
  }
}

async function storeRefreshToken(
  userId: number,
  token: string,
  expiresAt: Date,
) {
  const refreshToken = await prisma.refreshToken.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  });
  return refreshToken;
}

async function findRefreshTokenn(token: string) {
  const refreshToken = await prisma.refreshToken.findUnique({
    where: {
      token,
    },
  });
  return refreshToken;
}

async function deleteRefreshToken(token: string) {
  try {
    await prisma.refreshToken.delete({
      where: {
        token,
      },
    });
  } catch (error) {
    throw new Error("Error in running deleteRefreshToken function");
  }
}

async function updateUserProvider(
  email: string,
  provider: AuthProvider,
  providerId: string,
  avatarUrl?: string,
) {
  const updatedUser = await prisma.user.update({
    where: {
      email,
    },
    data: {
      provider,
      providerId,
      avatarUrl: avatarUrl ? avatarUrl : null,
    },
  });

  return updatedUser;
}
export {
  findUserByEmail,
  findUserById,
  createUser,
  findUserByProviderId,
  storeRefreshToken,
  findRefreshTokenn,
  deleteRefreshToken,
  updateUserProvider,
};
