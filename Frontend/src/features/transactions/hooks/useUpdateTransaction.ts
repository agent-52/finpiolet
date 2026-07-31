import { useMutation } from "@tanstack/react-query"
import { updateTransaction } from "../transaction.api"
import { queryClient } from "../../../lib/queryClient"

export const useUpdateTransaction = () =>{

    return useMutation({
        mutationFn:updateTransaction,

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