import { useMutation } from "@tanstack/react-query"
import { createTransaction } from "../transaction.api"
import { queryClient } from "../../../lib/queryClient"


export const useCreateTransaction = () =>{

    return useMutation({
        mutationFn:createTransaction,

        onMutate:async () => {
            //this runs before the mutaion fn call so we can apply optimistic updates here before the results form the backend arrive to show instant results in the ui and rollback in the onError part if backend gives error
        },

        onError:() => {

        },

        onSettled:() =>{
            queryClient.invalidateQueries({
                queryKey:["transactions"]
            })

            queryClient.invalidateQueries({
                queryKey:["dashboard"]
            })
        }
    })
}