import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteFaq as deletFaqApi } from "@/services/apiFaq";

export function useDeleteFaq() {
  const queryClient = useQueryClient();
  const { mutate: deleteFaq, isPending: isDeleting } = useMutation({
    mutationFn: (id: string) => deletFaqApi(id),
    onSuccess: () => {
      toast.success("Faqs deleted successfully.");
      queryClient.invalidateQueries({
        queryKey: ["faqs"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteFaq, isDeleting };
}
