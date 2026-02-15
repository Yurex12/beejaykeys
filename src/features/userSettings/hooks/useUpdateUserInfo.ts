import { updateUserInfo } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateUserInfo() {
  const queryClient = useQueryClient();
  const { mutate: updateInfo, isPending: isUpdating } = useMutation({
    mutationFn: updateUserInfo,
    onSuccess() {
      toast.success("User info updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong.");
    },
  });
  return { updateInfo, isUpdating };
}
