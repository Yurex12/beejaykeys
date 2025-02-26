import { getFaqs } from "@/services/apiFaq";
import { useQuery } from "@tanstack/react-query";

export function useFaqs() {
  const {
    data: faqs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["faqs"],
    queryFn: getFaqs,
  });

  return { faqs, isLoading, error };
}
