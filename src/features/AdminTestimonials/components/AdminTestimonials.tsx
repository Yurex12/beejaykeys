import AdminContentHeader from "@/components/AdminContentHeader";
import AdminTestimonialTable from "./AdminTestimonialTable";

function AdminTestimonials() {
  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader title="Testmonoials" onClick={() => {}} />

      <AdminTestimonialTable />
    </div>
  );
}

export default AdminTestimonials;
