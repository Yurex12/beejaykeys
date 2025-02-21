import AdminContentHeader from "@/components/AdminContentHeader";
import AdminProjectStats from "./AdminProjectStats";
import { AdminProjectTable } from "./AdminProjectTable";

function AdminProject() {
  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader title="Projects" onClick={() => {}} />
      <AdminProjectStats />
      <AdminProjectTable />
    </div>
  );
}

export default AdminProject;
