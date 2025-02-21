import AdminContentHeader from "@/components/AdminContentHeader";
import AdminLinksTable from "./AdminLinksTable";
function AdminLinks() {
  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader title="Links" />

      <AdminLinksTable />
    </div>
  );
}

export default AdminLinks;
