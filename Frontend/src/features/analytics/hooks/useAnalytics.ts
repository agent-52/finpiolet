import { useQuery } from "@tanstack/react-query"
import { useAuthStore } from "../../auth/store/authStore"
import { getAnalytics } from "../analytics.api"
import { data } from "react-router-dom"

export const useAnalytics = () => {
    const user = useAuthStore((state) => state.user)
    return (useQuery({
        queryKey:["analytics", user?.id],
        queryFn:getAnalytics,

        staleTime:1000*60*10,
        gcTime:1000*60*30,

        select:(data) => {
            //transform backend data
            const transformedData = data
            return transformedData
        }
    }))
}