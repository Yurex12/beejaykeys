import { useQuery } from "@tanstack/react-query";
import { getLinks } from "@/services/apiLinks";

export function useLinks() {
  const {
    data: links,
    isLoading,
    error,
    refetch: refetchLinks,
  } = useQuery({
    queryKey: ["links"],
    queryFn: getLinks,
    // retry: false,
  });

  return { links, isLoading, refetchLinks, error };
}
