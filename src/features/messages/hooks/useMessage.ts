import { useQuery } from "@tanstack/react-query";
import { getMessage } from "@/services/apiMessage";

export function useMessage(messageId: string) {
  const {
    data: message,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["messages", messageId],
    queryFn: () => getMessage(messageId),
  });

  return { message, isLoading, error };
}
