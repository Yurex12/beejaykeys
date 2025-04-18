import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { logout as logoutApi } from "@/services/apiAuth";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      localStorage.removeItem("userInfo");
      queryClient.removeQueries();
      navigate("/home", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });
  return { logout, isLoggingOut };
}
