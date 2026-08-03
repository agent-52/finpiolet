import { useMutation } from "@tanstack/react-query";
import { updateGoal } from "../goals.api";
import { queryClient } from "../../../lib/queryClient";

export const useUpdateGoal = () => {
  return useMutation({
    mutationFn: updateGoal,

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
