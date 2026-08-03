import { useMutation } from "@tanstack/react-query";
import { deleteGoal } from "../goals.api";
import { queryClient } from "../../../lib/queryClient";

export const useDeleteGoal = () => {
  return useMutation({
    mutationFn: deleteGoal,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["goals"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },
  });
};
