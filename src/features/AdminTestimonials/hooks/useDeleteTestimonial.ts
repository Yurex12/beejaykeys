import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteTestimonial as deleteTestimonialApi } from "@/services/apiTestimonials";

export function useDeleteTestimonial() {
  const queryClient = useQueryClient();
  const { mutate: deleteTestimonial, isPending: isDeleting } = useMutation({
    mutationFn: (id: string) => deleteTestimonialApi(id),
    onSuccess: () => {
      toast.success("Testimonial deleted successfully.");
      queryClient.invalidateQueries({
        queryKey: ["testimonials"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteTestimonial, isDeleting };
}
