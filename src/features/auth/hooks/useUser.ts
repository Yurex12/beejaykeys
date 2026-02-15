import { getUserData } from "@/services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
  };
}
