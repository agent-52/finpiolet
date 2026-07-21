import app from "./app";
import { env } from "./config/env";
import { connectDb } from "./config/prisma";
import { connectRedis } from "./config/redis";


async function startServer() {

  await connectDb()
  await connectRedis()

  app.listen(env.PORT, () => {
    console.log("server running on port: ", env.PORT);
  });

}

startServer()