import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createFaq as createFaqApi } from "@/services/apiFaq";

export function useCreateFaq() {
  const queryClient = useQueryClient();

  const {
    mutate: createFaq,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: createFaqApi,
    onSuccess: () => {
      toast.success("New Faq successfully created.");
      queryClient.invalidateQueries({
        queryKey: ["faqs"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createFaq, isDeleting, error };
}
