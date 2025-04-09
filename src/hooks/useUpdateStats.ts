import { updateStats as updateStatsApi } from "@/services/apiStats";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateStats() {
  const queryClient = useQueryClient();

  const {
    mutate: updateStats,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: updateStatsApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stats"] });
    },
    onError: () => console.error("Something went wrong."),
  });

  return { updateStats, error, isUpdating };
}
