import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { env } from "./env";
import { ApiError } from "../utils/ApiError";

const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
});
export const prisma = new PrismaClient({
  adapter,
});


export async function connectDb() {
  try {
    await prisma.$connect()
  } catch (error) {
    throw new ApiError(500, "prisma connection cannot be established wrong credentials")
  }
}