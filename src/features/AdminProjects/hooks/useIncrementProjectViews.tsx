import { incrementProjectViews } from "@/services/apiProject";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useIncrementProjectViews() {
  const queryClient = useQueryClient();
  const { mutate: updateViews } = useMutation({
    mutationFn: incrementProjectViews,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
    onError: () => console.error("something went wrong."),
  });
  return { updateViews };
}
