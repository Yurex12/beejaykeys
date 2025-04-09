import { getStats } from "@/services/apiStats";
import { useQuery } from "@tanstack/react-query";

export default function useStats() {
  const {
    data: stats,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });
  return { stats, isLoading, error };
}
