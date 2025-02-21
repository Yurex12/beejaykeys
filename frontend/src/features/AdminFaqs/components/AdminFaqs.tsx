import AdminFaqsTable from "./AdminFaqsTable";
import AdminContentHeader from "@/components/AdminContentHeader";

function AdminFaqs() {
  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader title="Faqs" onClick={() => {}} />
      <AdminFaqsTable />
    </div>
  );
}

export default AdminFaqs;
