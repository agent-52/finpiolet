import app from "./app";
import { env } from "./config/env";
import { connectDb } from "./config/prisma";
import { connectRedis } from "./config/redis";
import { startCronJobs } from "./cron/cron";


const PORT = env.PORT || 3000
async function startServer() {

  await connectDb()
  await connectRedis()
  await startCronJobs()
  app.listen(PORT, () => {
    console.log("server running on port: ", PORT);
  });

}

startServer()