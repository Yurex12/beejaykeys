import { updateUserPassword } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useUpdateUserPassword() {
  const { mutate: updatePassword, isPending: isUpdating } = useMutation({
    mutationFn: updateUserPassword,
    onSuccess: () => {
      toast.success("Password updated Successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return { updatePassword, isUpdating };
}
