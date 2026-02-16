import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/features/auth/hooks/useUser";
import { HiDatabase } from "react-icons/hi";
import { Link } from "react-router-dom";

function AdminButton() {
  const { isLoading } = useUser();

  if (isLoading) return <Skeleton className="h-9 w-40" />;

  return (
    <Link
      to="/dashboard/overview"
      className="flex items-center justify-center gap-x-2 rounded-md border border-gray-600 px-4 py-2 text-sm text-gray-600"
    >
      <HiDatabase />
      <span>Admin Dashboard</span>
    </Link>
  );
}

export default AdminButton;
