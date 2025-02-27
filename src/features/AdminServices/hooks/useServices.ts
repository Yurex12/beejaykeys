import { useQuery } from "@tanstack/react-query";
import { getServices } from "@/services/apiServices";

export function useServices() {
  const {
    data: services,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  return { services, isLoading, error };
}
