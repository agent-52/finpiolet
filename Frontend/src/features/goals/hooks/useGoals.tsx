import { useQuery } from "@tanstack/react-query"
import { getGoals } from "../goals.api"

export const useGoals = () => {
    return (useQuery({
        queryKey:["goals"],
        queryFn:getGoals,
    }))
}