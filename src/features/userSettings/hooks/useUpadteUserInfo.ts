import { TUpdateUserSchema } from "@/schema/userSchema";
import { updateUserInfo } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpadteUserInfo() {
  const queryClient = useQueryClient();
  const { mutate: updateInfo, isPending: isUpdating } = useMutation({
    mutationFn: ({
      data,
      userId,
    }: {
      data: TUpdateUserSchema;
      userId: string;
    }) => updateUserInfo(data, userId),
    onSuccess: (data) => {
      toast.success("User info updated succesfully");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      localStorage.setItem("userInfo", JSON.stringify(data.user));
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong.");
    },
  });
  return { updateInfo, isUpdating };
}
