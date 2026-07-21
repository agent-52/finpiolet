import redisClient from "../config/redis";

export async function invalidateTransactionRelatedCache(userId:number, year:number, month:number) {
    const dashboardKey = `dashboard:user:${userId}`
    const analyticsKey = `analytics:user:${userId}`
    const monthlySummaryKey = `monthly-summary:user:${userId}:${year}:${month}`
    const goalsKey = `goals:user:${userId}`

    const keys = [
        dashboardKey,
        analyticsKey,
        monthlySummaryKey,
        goalsKey
    ]
    try {
        await Promise.all(
            keys.map((k) => redisClient.del(k))
        )
    } catch (error) {
        console.error("Redis DEL operaitons failed:", error)
    }
}