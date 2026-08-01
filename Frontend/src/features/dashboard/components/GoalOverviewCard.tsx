import { ProgressBar } from "../../../components/common/ProgressBar"

export const GoalOverviewCard = ({title, backImg, remaniningMonths, currentAmount, targetAmount, percentage, remainingAmount, requiredSavingPerMonth}:{title:string, backImg:React.ReactNode, remaniningMonths:number, currentAmount:number, targetAmount:number, percentage:number, remainingAmount:number, requiredSavingPerMonth:number}) => {
    return(
        <div>
            <div className="flex justify-between">
                <div className="flex">
                    <div>{backImg}</div>
                    <div>
                        <div>{title}</div>
                        <div>{remaniningMonths} months remaining</div>
                    </div>
                </div>
                <div>
                    <div>{currentAmount}</div>
                    <div>of {targetAmount}</div>
                </div>
            </div>
            <div><ProgressBar percentage={percentage} /></div>
            <div className="flex justify-between">
                <div>{percentage}% reached</div>
                <div>{remainingAmount} remaining</div>
            </div>
        </div>
    )
}