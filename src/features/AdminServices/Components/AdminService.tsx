import AdminContentHeader from "@/components/AdminContentHeader";
import AdminServiceTable from "./AdminServiceTable";
import CreateEditDialog from "@/components/CreateEditDialog";
import AdminServiceForm from "./AdminServiceForm";
import { useState } from "react";

function AdminService() {
  const [open, setOpen] = useState(false);

  const openServiceDialog = () => setOpen(true);
  const closeServiceDialog = () => setOpen(false);
  return (
    <>
      <AdminContentHeader title="Services" />
      <AdminServiceTable openServiceDialog={openServiceDialog} />
      <CreateEditDialog title="Edit service" open={open} onOpenChange={setOpen}>
        <AdminServiceForm closeServiceDialog={closeServiceDialog} />
      </CreateEditDialog>
    </>
  );
}

export default AdminService;
