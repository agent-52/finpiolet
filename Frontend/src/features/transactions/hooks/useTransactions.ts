import { useQuery } from "@tanstack/react-query"
import { getTransactions } from "../transaction.api"

export const useTransactions = () => {
    return useQuery({
        queryKey:["transactions"],
        queryFn:getTransactions,

        staleTime:1000*60*5,
        gcTime:1000*60*10
    })
}