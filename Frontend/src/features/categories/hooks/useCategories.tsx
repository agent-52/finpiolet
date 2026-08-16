import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../category.api";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,

    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
  });
};
