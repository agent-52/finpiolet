import { useQuery } from "@tanstack/react-query";
import { getGoalPlan } from "../goals.api";

export const useGetGoalPlan = (goalId: number) => {
  return useQuery({
    queryKey: ["goalPlan", goalId],
    queryFn: () => getGoalPlan(goalId),
    enabled: !!goalId,
  });
};
