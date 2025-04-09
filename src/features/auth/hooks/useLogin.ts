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
      toast.success("Login succesful");
      queryClient.setQueryData(["user"], data);
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      navigate("/dashboard/overview");
    },
    onError: (err) => toast.error(err.message),
  });
  return { login, isLoading, error };
}
