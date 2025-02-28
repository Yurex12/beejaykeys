import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { editProject as editProjectApi } from "@/services/apiProject";
import { TprojectSchema } from "@/schema/projectSchema";

export function useEditProject() {
  const queryClient = useQueryClient();

  const {
    mutate: editProject,
    isPending: isEditing,
    error,
  } = useMutation({
    mutationFn: ({ data, id }: { data: TprojectSchema; id: string }) =>
      editProjectApi(data, id),

    onSuccess: () => {
      toast.success("Project successfully updated.");
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editProject, isEditing, error };
}
