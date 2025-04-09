import { getMessages } from "@/services/apiMessage";
import { useQuery } from "@tanstack/react-query";

export function useMessages() {
  const {
    data: messages,
    isLoading,
    error,
    refetch: refetchMessages,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
  });

  return { messages, isLoading, refetchMessages, error };
}
