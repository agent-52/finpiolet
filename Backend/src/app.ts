import express from "express";
import { mainRouter } from "./routes/main";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
// app.use(morgan());

app.use("/api", mainRouter);
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "FinPilot API running",
  });
});
export default app;
