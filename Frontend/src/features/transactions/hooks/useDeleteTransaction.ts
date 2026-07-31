import { useMutation } from "@tanstack/react-query"
import { deleteTransaction } from "../transaction.api"
import { queryClient } from "../../../lib/queryClient"

export const useDeleteTransaction = () =>{

    return useMutation({
        mutationFn:deleteTransaction,

        onSuccess:() => {
            queryClient.invalidateQueries({
                queryKey:["transactions"]
            })

            queryClient.invalidateQueries({
                queryKey:["dashboard"]
            })
        }
    })
}