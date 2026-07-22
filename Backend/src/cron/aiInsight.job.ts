import cron from "node-cron"
import { generateInsightsForAllUsers } from "../services/aiInsights.service"



export function aiInsightsCronJob() {
    cron.schedule("0 1 * * *", async() => {
        console.log("Starting Daily AI Insight Generation...")
        try {
            await generateInsightsForAllUsers()
        } catch (error) {
            console.error("aiInsigntCronJob failed", error)
        }
        console.log("Finished Daily AI Insight Generation")
    })
    
}
//q} testing ke liye raat ke 1 baje tak ka wait nahi karna hai to kaise karoge?

//ans} "* * * * * " user kar lo every minute run hoga to test kar lo ya fir genrateInsightsForAllUSers wale function ko indivialally check kar lo