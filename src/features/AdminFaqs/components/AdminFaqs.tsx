import { useState } from "react";

import AdminContentHeader from "@/components/AdminContentHeader";
import CreateEditDialog from "@/components/CreateEditDialog";
import AdminFaqForm from "./AdminFaqForm";
import AdminFaqsTable from "./AdminFaqsTable";

function AdminFaqs() {
  const [open, setOpen] = useState(false);

  const openFaqDialog = () => setOpen(true);
  const closeFaqDialog = () => setOpen(false);

  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader title="Faqs" onClick={openFaqDialog} />

      <AdminFaqsTable />
      <CreateEditDialog
        title="Add a new Faq"
        open={open}
        onOpenChange={setOpen}
      >
        <AdminFaqForm closeFaqDialog={closeFaqDialog} />
      </CreateEditDialog>
    </div>
  );
}

export default AdminFaqs;
