import { TUpdatePasswordSchema } from "@/schema/userSchema";
import { updateUserPassword } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useUpdateUserPassword() {
  const { mutate: updatePassword, isPending: isUpdating } = useMutation({
    mutationFn: ({
      data,
      userId,
    }: {
      data: TUpdatePasswordSchema;
      userId: string;
    }) => updateUserPassword(data, userId),
    onSuccess: () => {
      toast.success("Password upadated Succesfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return { updatePassword, isUpdating };
}
