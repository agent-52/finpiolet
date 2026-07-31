import { ErrorPage } from "../../../components/feedback/ErrorPage"
import { useDashboard } from "../hooks/useDashboard"
import { DahboardSkeleton } from "./DashboardSkeleton"


export const Dashboard = () => {
    const {data, isLoading, isError, error} = useDashboard()

    if(isLoading){
        return <DahboardSkeleton/>
    }
    if(isError){
        return <ErrorPage />
    }
    return(
        <div className="dashboardPage">

        </div>
    )
}