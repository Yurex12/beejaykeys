import { useState } from "react";

import AdminContentHeader from "@/components/AdminContentHeader";
import CreateEditDialog from "@/components/CreateEditDialog";
import { Faq } from "../types";
import AdminFaqForm from "./AdminFaqForm";
import AdminFaqsTable from "./AdminFaqsTable";

function AdminFaqs() {
  const [openForm, setOpenForm] = useState(false);
  const [faqToEdit, setFaqToEdit] = useState<Faq | {}>({});

  const resetFaqToEdit = () => setFaqToEdit({});

  function handleOpenChange(value: boolean) {
    if (!value) resetFaqToEdit();
    setOpenForm(value);
  }

  function handleFaqEdit(faq: Faq) {
    setFaqToEdit(faq);
    handleOpenChange(true);
  }

  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader title="Faqs" onClick={() => handleOpenChange(true)} />

      <CreateEditDialog open={openForm} onOpenChange={handleOpenChange}>
        <AdminFaqForm
          closeFaqDialog={() => handleOpenChange(false)}
          faqToEdit={faqToEdit}
        />
      </CreateEditDialog>
      <AdminFaqsTable handleFaqEdit={handleFaqEdit} />
    </div>
  );
}

export default AdminFaqs;
