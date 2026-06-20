import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
};
