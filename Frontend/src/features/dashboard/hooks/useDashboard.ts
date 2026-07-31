import { useQuery } from "@tanstack/react-query"
import { getDashboard } from "../dashboard.api"

export const useDashboard = () =>{
    return useQuery({
        queryKey:["dashboard"],
        queryFn: getDashboard,

        staleTime:1000*60*5,
        gcTime:1000*60*30
        
    })
}