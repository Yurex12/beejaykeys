import { useQuery } from "@tanstack/react-query";
import { getLinks } from "@/services/apiLinks";

export function useLinks() {
  const {
    data: links,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["links"],
    queryFn: getLinks,
  });

  return { links, isLoading, error };
}
