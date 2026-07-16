import Groq from "groq-sdk";
import { env } from "../config/env";
import { ApiError } from "./ApiError";

const apiKey = env.GROQ_API_KEY
if(!apiKey){
    throw new ApiError(500, "Groq api key is undefined")
}
const groq = new Groq({apiKey:apiKey})

export {groq}