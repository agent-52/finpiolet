import { useMutation } from "@tanstack/react-query"
import { creategoal } from "../goals.api"
import { queryClient } from "../../../lib/queryClient"
import { useAuthStore } from "../../auth/store/authStore"
import type { Goal } from "../goals.types"

export const useCreateGoal = () => {
    const user = useAuthStore((state) => state.user)
    return (
        useMutation({
            mutationFn:creategoal,

            onMutate:(data) => {
                //optimistic update
                queryClient.cancelQueries({
                    queryKey:["goals"]
                })

                const oldData = queryClient.getQueryData<Goal[]>(["goals"])

                const newGoal = {
                    ...data,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    id: crypto.randomUUID(),
                    userId: user?.id
                    
                }

                queryClient.setQueryData<Goal[]>(['goals'], (old:any) => {
                    return [newGoal, ...old]
                })

                return{
                    oldData
                }
            },

            onError:(error, Variables, onMutationResult) => {
                queryClient.setQueryData(["goals"], onMutationResult?.oldData)
            },

            onSettled:() =>{
                queryClient.invalidateQueries({
                    queryKey:["goals"]
                })

                queryClient.invalidateQueries({
                    queryKey:["dashboard"]
                })
            }

        })
    )
}