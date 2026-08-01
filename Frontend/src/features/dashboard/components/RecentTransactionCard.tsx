
export const RecentTransactionCard = ({title, description, backImg, label, amount, date}:{title:string, description:string, backImg:React.ReactNode, label:string, amount:string, date:string}) => {

    return (
        <div className="flex justify-between">
            <div className="flex gap-1">
                <div>{backImg}</div>
                <div>
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
            </div>
            <div className="flex gap-2">
                <div>{label}</div>
                <div>
                    <div>{amount}</div>
                    <div>{date}</div>
                </div>
            </div>
        </div>
    )
}