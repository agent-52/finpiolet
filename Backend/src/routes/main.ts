import { Router } from "express";
import { authRouter } from "./auth.routes";
import { aiRouter } from "./ai.routes";
import { analyticsRouter } from "./analytics";
import { budgetRouter } from "./budget.routes";
import { categoryRouter } from "./category.routes";
import { dashboardRouter } from "./dashboard.routes";
import { goalRouter } from "./goal.routes";
import { transactionRouter } from "./transaction.routes";
import { savingPlanRouter } from "./savings";

export const mainRouter = Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/ai", aiRouter);
mainRouter.use("/analytics", analyticsRouter)
mainRouter.use("/budget", budgetRouter)
mainRouter.use("/category", categoryRouter)
mainRouter.use("/dashboard", dashboardRouter)
mainRouter.use("/goal", goalRouter)
mainRouter.use("/transaction", transactionRouter)
mainRouter.use("/saving-plan", savingPlanRouter)
