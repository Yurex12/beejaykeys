import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { login as loginApi } from "@/services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      toast.success("Login successful");
      queryClient.setQueryData(["user"], data);
      navigate("/dashboard/overview", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });
  return { login, isLoading, error };
}
