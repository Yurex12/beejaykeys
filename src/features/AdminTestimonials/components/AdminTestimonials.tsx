import { useState } from "react";

import AdminContentHeader from "@/components/AdminContentHeader";
import CreateEditDialog from "@/components/CreateEditDialog";

import AdminTestimonialForm from "./AdminTestimonialForm";
import AdminTestimonialTable from "./AdminTestimonialTable";

import { Testimonial } from "../types";

function AdminTestimonials() {
  const [openForm, setOpenForm] = useState(false);
  const [testimonailToEdit, setTestimonialToEdit] = useState<Testimonial | {}>(
    {},
  );

  const resetTestimonialToEdit = () => setTestimonialToEdit({});

  function handleOpenChange(value: boolean) {
    if (!value) resetTestimonialToEdit();
    setOpenForm(value);
  }

  function handleTestimonialEdit(testimonial: Testimonial) {
    setTestimonialToEdit(testimonial);
    handleOpenChange(true);
  }

  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader
        title="Testmonoials"
        onClick={() => handleOpenChange(true)}
      />
      <CreateEditDialog open={openForm} onOpenChange={handleOpenChange}>
        <AdminTestimonialForm
          closeTestimonialDialog={() => handleOpenChange(false)}
          testimonailToEdit={testimonailToEdit}
        />
      </CreateEditDialog>

      <AdminTestimonialTable handleTestimonialEdit={handleTestimonialEdit} />
    </div>
  );
}

export default AdminTestimonials;
