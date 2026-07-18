export function detectIntent(message:string){

    let dashboard = false
    let analytics = false
    let goals = false
    let budgets = false

    const goalsWords = ["goal", "goals", "target", "save", "savings", "saving"]

    goals = goalsWords.some((word) => message.toLowerCase().includes(word.toLowerCase()))
    return {
        dashboard,
        analytics,
        goals,
        budgets
    }
}