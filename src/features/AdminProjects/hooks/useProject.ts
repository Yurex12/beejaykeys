import { useQuery } from "@tanstack/react-query";

import { getProject } from "@/services/apiProject";

export function useProject(projectId?: string) {
  const {
    data: project,
    isLoading,
    error,
    refetch: refetchProject,
  } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProject(projectId!),
    enabled: !!projectId,
  });

  return { project, isLoading, refetchProject, error };
}
