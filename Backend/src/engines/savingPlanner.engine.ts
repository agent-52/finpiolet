
import { ESSENTIAL_CATEGORIES } from "../constants/saving.constant";
import { findCategoryById } from "../repositories/category.repository";
import savingPlannerRepository from "../repositories/savingPlanner.repository";

export async function  savingPlannerEngine(userId:number, targetAdditionalSaving:number) {
    
    const averageExpense = await savingPlannerRepository.getAverageCategoryExpenses(userId)
    const categoryExpenseList = (await Promise.all(
        averageExpense.map(async (obj) => {
            const category = await findCategoryById(obj.categoryId)
            const categoryName = category?.name
            if(categoryName && !ESSENTIAL_CATEGORIES.includes(categoryName)){
                return{
                    categoryName,
                    currentAverage:obj._avg.amount??0
                }
            }
        })
    )).filter(Boolean)

    //recommendation logic
    let totalPotentialSaving = 0;
    let originalTarget = targetAdditionalSaving
    let remainingTarget = targetAdditionalSaving
    const allRecommendations = categoryExpenseList.map((c) => {
        if(c?.currentAverage && remainingTarget>0){
            let reduceableAmount = Math.round(Math.min(((30*c.currentAverage)/100), remainingTarget ))
        
            remainingTarget = remainingTarget-reduceableAmount
            totalPotentialSaving += reduceableAmount
            return{
                "category":c.categoryName,
                "currentAverage":c.currentAverage,
                "reduceBy":reduceableAmount,
                "recommendedBudget":c.currentAverage-reduceableAmount
            }
        }
        
    }).filter(Boolean)

    const recommendations = allRecommendations.filter((r) => r !== undefined)

    if(totalPotentialSaving< originalTarget){
        return{
            originalTarget,
            totalPotentialSaving,
            "achievable":false,
            recommendations
        }
    }else{
        return{
            "achievable":true,
            originalTarget,
            recommendations,
            totalPotentialSaving
        }
    }

}