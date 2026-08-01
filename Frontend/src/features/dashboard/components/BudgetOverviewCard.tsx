import { ProgressBar } from "../../../components/common/ProgressBar"


export const BudgetOverviewCard = ({title, budget, spent, remaining, percentage}:{title:string, budget:number, spent:number, remaining:number, percentage:number}) =>{
    return (
        <div className="flex-col">
            <div>
                <div>
                    <div className="dot"></div>
                    <div>{title}</div>
                </div>
                <div>₹{spent}<span>/₹{budget}</span></div>
            </div>
            <div className="usagePercentageBar"><ProgressBar percentage={percentage}/></div>
            <div>
                <div>{percentage}% used</div>
                <div>₹{remaining} left</div>
            </div>
        </div>
    )
}