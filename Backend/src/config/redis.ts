import { createClient } from "redis";
import { env } from "./env";
import { ApiError } from "../utils/ApiError";


const REDIS_URL = env.REDIS_URL
if(!REDIS_URL){
    throw new ApiError(500, "no REDIS_URL found")
}

//isse sirf client object bana hai abhi connect nahi hua hai
//redis clients are event emmitters means they can emit events like connect , error, end, ready, reconnecting
const redisClient = createClient({
    url:REDIS_URL
})

redisClient.on("error", (error) => {
    console.error("Redis Error: ", error)
})
redisClient.on("connect", () => {
    console.log("connecting to redis....")
})
redisClient.on("ready", () => {
    console.log("redis is ready. ")
})
redisClient.on("end", () => {
    console.log("Redis connection closed.");
});

redisClient.on("reconnecting", () => {
    console.log("Reconnecting to Redis...");
});


export async function connectRedis() {
    try {
        if(!redisClient.isOpen){
            await redisClient.connect();
        }
        
        console.log(" ✅ Redis connected successfully")
    } catch (error) {

        //hum error throw nahi kar rahe kyoki hum chate hai ki redis naa bhi start ho to bhi server to start ho jana chahiye ya fir keh lo server stop nahi hona chahiye 
        console.error("Failed to connect Redis.");
        console.error(error)

    }
}

export default redisClient