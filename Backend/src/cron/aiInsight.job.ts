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