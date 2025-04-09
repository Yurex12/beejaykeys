import { getProjects } from "@/services/apiProject";
import { useQuery } from "@tanstack/react-query";

export function useProjects() {
  const {
    data: projects,
    isLoading,
    error,
    refetch: refetchProjects,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return { projects, isLoading, error, refetchProjects };
}
