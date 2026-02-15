import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/features/auth/hooks/useUser";
import { HiDatabase } from "react-icons/hi";
import { Link } from "react-router-dom";

function AdminButton() {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading) return <Skeleton className="h-10 w-20" />;

  return (
    <div>
      {isAuthenticated ? (
        <Link
          to="/dashboard/overview"
          className="flex items-center justify-center gap-x-2 rounded-md border border-gray-600 px-4 py-2 text-sm text-gray-600"
        >
          <HiDatabase />
          <span>Admin Dashboard</span>
        </Link>
      ) : (
        <Button variant="outline" asChild>
          <Link to="/login">Login</Link>
        </Button>
      )}
    </div>
  );
}

export default AdminButton;
