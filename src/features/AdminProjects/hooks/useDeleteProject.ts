import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteProject as deleteProjectApi } from "@/services/apiProject";

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const { mutate: deleteProject, isPending: isDeleting } = useMutation({
    mutationFn: (id: string) => deleteProjectApi(id),
    onSuccess: () => {
      toast.success("Projects deleted successfully.");
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteProject, isDeleting };
}
