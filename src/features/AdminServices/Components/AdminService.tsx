import { useState } from "react";

import AdminContentHeader from "@/components/AdminContentHeader";
import AdminServiceTable from "./AdminServiceTable";
import CreateEditDialog from "@/components/CreateEditDialog";
import AdminServiceForm from "./AdminServiceForm";

import { Service } from "../types";

function AdminService() {
  const [openForm, setOpenForm] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState<Service | {}>({});

  const resetServiceToEdit = () => setServiceToEdit({});

  function handleOpenChange(value: boolean) {
    if (!value) resetServiceToEdit();
    setOpenForm(value);
  }

  function handleServiceEdit(testimonial: Service) {
    setServiceToEdit(testimonial);
    handleOpenChange(true);
  }
  return (
    <>
      <AdminContentHeader title="Services" />
      <CreateEditDialog open={openForm} onOpenChange={handleOpenChange}>
        <AdminServiceForm
          closeServiceDialog={() => setOpenForm(false)}
          serviceToEdit={serviceToEdit}
        />
      </CreateEditDialog>
      <AdminServiceTable handleServiceEdit={handleServiceEdit} />
    </>
  );
}

export default AdminService;
