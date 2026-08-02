import { useMutation } from "@tanstack/react-query"
import { createTransaction } from "../transaction.api"
import { queryClient } from "../../../lib/queryClient"
import type { Transaction, TransactionData } from "../transaction.types"


export const useCreateTransaction = () =>{

    return useMutation({
        mutationFn:createTransaction,

        onMutate:async (newTransaction:TransactionData) => {
            //this runs before the mutaion fn call so we can apply optimistic updates here before the results form the backend arrive to show instant results in the ui and rollback in the onError part if backend gives error

            //1 stop any quries for transaction so that our optimistic update dont get overwritten
            await queryClient.cancelQueries({
                queryKey:["transactions"]
            })

            //2 update the transaction cache and add the new entry 
            const oldData = queryClient.getQueryData<Transaction[]>(["transactions"])
            const optimisticTransacation = {
                
                id:crypto.randomUUID(),
                ...newTransaction,
                createdAt: new Date().toISOString(),

                updatedAt: new Date().toISOString(),
            }
            queryClient.setQueryData<Transaction[]>(["transactions"], (old:any) => {
                return [optimisticTransacation, ...old]
            })

            //3 retrun oldData it will reach onError automatically
            return{
                oldData
            }

            
        },

        onError:(error, variables, onMutateResult) => {
            queryClient.setQueryData(["transactions"],onMutateResult?.oldData)
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