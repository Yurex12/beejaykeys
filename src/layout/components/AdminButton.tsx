import { HiDatabase } from "react-icons/hi";
import { Link } from "react-router-dom";

function AdminButton() {
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
