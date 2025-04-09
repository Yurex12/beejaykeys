import { getUserData } from "@/services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
  });

  return {
    user: data?.user,
    isAuthenticated: !!data?.isAuthenticated,
    isLoading,
    error,
  };
}
