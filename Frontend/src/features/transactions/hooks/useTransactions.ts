import { useQuery } from "@tanstack/react-query"
import { getTransactions } from "../transaction.api"
import type { TransactionQueryObject } from "../transaction.types"

export const useTransactions = (queryObject:TransactionQueryObject) => {
    return useQuery({
        queryKey:["transactions"],
        queryFn: () => getTransactions(queryObject),

        staleTime:1000*60*5,
        gcTime:1000*60*10
    })
}