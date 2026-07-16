import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GROQ_API_KEY:process.env.GROQ_API_KEY
};
