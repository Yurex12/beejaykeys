import AdminContentHeader from "@/components/AdminContentHeader";
import AdminMessagesContainer from "./AdminMessagesContainer";
import { useMessages } from "../hooks/useMessages";
import Spinner from "@/components/Spinner";
import ErrorPage from "@/components/ErrorPage";

function AdminMessage() {
  const { isLoading, error, refetchMessages } = useMessages();
  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage onRetry={refetchMessages} />;
  return (
    <>
      <AdminContentHeader title="Messages" />
      <AdminMessagesContainer />
    </>
  );
}

export default AdminMessage;
