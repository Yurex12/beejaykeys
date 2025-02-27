import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { TlinkSchema } from "@/schema/linkSchema";
import { editLink as editLinkApi } from "@/services/apiLinks";

export function useEditLink() {
  const queryClient = useQueryClient();

  const {
    mutate: editLink,
    isPending: isEditing,
    error,
  } = useMutation({
    mutationFn: ({ data, id }: { data: TlinkSchema; id: string }) =>
      editLinkApi(data, id),

    onSuccess: () => {
      toast.success("Link successfully updated.");
      queryClient.invalidateQueries({
        queryKey: ["links"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editLink, isEditing, error };
}
