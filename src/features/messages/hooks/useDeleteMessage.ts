import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteMessage as deleteMessageApi } from "@/services/apiMessage";

export function useDeleteMessage() {
  const queryClient = useQueryClient();
  const { mutate: deleteMessage, isPending: isDeleting } = useMutation({
    mutationFn: (id: string) => deleteMessageApi(id),
    onSuccess: () => {
      toast.success("Message deleted successfully.");
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteMessage, isDeleting };
}
