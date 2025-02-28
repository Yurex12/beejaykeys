import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createProject as createProjectApi } from "@/services/apiProject";
import { TprojectSchema } from "@/schema/projectSchema";

export function useCreateProject() {
  const queryClient = useQueryClient();

  const {
    mutate: createProject,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: (data: TprojectSchema) => createProjectApi(data),
    onSuccess: () => {
      toast.success("New Project successfully created.");
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createProject, isDeleting, error };
}
