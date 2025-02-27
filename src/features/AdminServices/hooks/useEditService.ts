import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { TserviceSchema } from "@/schema/serviceSchema";
import { editService as editServiceApi } from "@/services/apiServices";

export function useEditService() {
  const queryClient = useQueryClient();

  const {
    mutate: editService,
    isPending: isEditing,
    error,
  } = useMutation({
    mutationFn: ({ data, id }: { data: TserviceSchema; id: string }) =>
      editServiceApi(data, id),

    onSuccess: () => {
      toast.success("Services successfully updated.");
      queryClient.invalidateQueries({
        queryKey: ["services"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editService, isEditing, error };
}
