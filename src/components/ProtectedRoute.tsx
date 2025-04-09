import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useUser } from "@/features/auth/hooks/useUser";
import Spinner from "./Spinner";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useUser();

  if (isLoading) return <Spinner />;

  if (!isLoading && !isAuthenticated) return <Navigate to="/login" />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
