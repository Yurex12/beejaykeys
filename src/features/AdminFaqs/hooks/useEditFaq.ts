import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { TfaqSchema } from "@/schema/faqSchema";
import { editFaq as editFaqApi } from "@/services/apiFaq";

export function useEditFaq() {
  const queryClient = useQueryClient();

  const {
    mutate: editFaq,
    isPending: isEditing,
    error,
  } = useMutation({
    mutationFn: ({ data, id }: { data: TfaqSchema; id: string }) =>
      editFaqApi(data, id),

    onSuccess: () => {
      toast.success("Faq successfully updated.");
      queryClient.invalidateQueries({
        queryKey: ["faqs"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editFaq, isEditing, error };
}
