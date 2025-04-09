import { getFaqs } from "@/services/apiFaq";
import { useQuery } from "@tanstack/react-query";

export function useFaqs() {
  const {
    data: faqs,
    isLoading,
    error,
    refetch: refetchFaqs,
  } = useQuery({
    queryKey: ["faqs"],
    queryFn: getFaqs,
  });

  return { faqs, isLoading, refetchFaqs, error };
}
