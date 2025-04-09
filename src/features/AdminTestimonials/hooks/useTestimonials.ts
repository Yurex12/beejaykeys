import { useQuery } from "@tanstack/react-query";
import { getTestimonials } from "@/services/apiTestimonials";

export function useTestimonials() {
  const {
    data: testimonials,
    isLoading,
    error,
    refetch: refetchTestimonials,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  return { testimonials, isLoading, refetchTestimonials, error };
}
