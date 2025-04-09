import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { TmessageSchema } from "@/schema/message";
import { createMessage as createMessageApi } from "@/services/apiMessage";

export function useCreateMessage() {
  const queryClient = useQueryClient();

  const {
    mutate: createMessage,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: (data: TmessageSchema) => createMessageApi(data),
    onSuccess: () => {
      toast.success("Message sent successfully.");
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createMessage, isDeleting, error };
}
