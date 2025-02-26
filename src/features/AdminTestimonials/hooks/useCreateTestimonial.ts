import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createTestimonial as createTestimonialApi } from "@/services/apiTestimonials";
import { TtestimonialData } from "@/schema/testimonialSchema";

export function useCreateTestimonials() {
  const queryClient = useQueryClient();

  const {
    mutate: createTestimonial,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: (data: TtestimonialData) => createTestimonialApi(data),
    onSuccess: () => {
      toast.success("New testimonial successfully created.");
      queryClient.invalidateQueries({
        queryKey: ["testimonials"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createTestimonial, isDeleting, error };
}
