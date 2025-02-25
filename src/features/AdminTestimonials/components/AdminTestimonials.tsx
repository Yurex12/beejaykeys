import AdminContentHeader from "@/components/AdminContentHeader";
import CreateEditDialog from "@/components/CreateEditDialog";
import { useState } from "react";
import AdminTestimonialForm from "./AdminTestimonialForm";
import AdminTestimonialTable from "./AdminTestimonialTable";

function AdminTestimonials() {
  const [open, setOpen] = useState(false);

  const openTestimonialDialog = () => setOpen(true);
  const closeTestimonialDialog = () => setOpen(false);
  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader
        title="Testmonoials"
        onClick={openTestimonialDialog}
      />
      <CreateEditDialog
        title="Add a new Testimonial"
        open={open}
        onOpenChange={setOpen}
      >
        <AdminTestimonialForm closeTestimonialDialog={closeTestimonialDialog} />
      </CreateEditDialog>
      <AdminTestimonialTable />
    </div>
  );
}

export default AdminTestimonials;
