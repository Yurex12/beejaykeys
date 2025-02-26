import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { editTestimonial as editTestimonialApi } from "@/services/apiTestimonials";
import { TtestimonialData } from "@/schema/testimonialSchema";

export function useEditTestimonials() {
  const queryClient = useQueryClient();

  const {
    mutate: editTestimonial,
    isPending: isEditing,
    error,
  } = useMutation({
    mutationFn: ({ data, id }: { data: TtestimonialData; id: string }) =>
      editTestimonialApi(data, id),

    onSuccess: () => {
      toast.success("Testimonial successfully updated.");
      queryClient.invalidateQueries({
        queryKey: ["testimonials"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editTestimonial, isEditing, error };
}
