import { useState } from "react";

import AdminContentHeader from "@/components/AdminContentHeader";
import AdminServiceTable from "./AdminServiceTable";
import CreateEditDialog from "@/components/CreateEditDialog";
import AdminServiceForm from "./AdminServiceForm";

import { Service } from "../types";
import Spinner from "@/components/Spinner";
import { useServices } from "../hooks/useServices";
import ErrorPage from "@/components/ErrorPage";

function AdminService() {
  const [openForm, setOpenForm] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState<Service | {}>({});

  const { isLoading, refetchServices, error } = useServices();

  const resetServiceToEdit = () => setServiceToEdit({});

  function handleOpenChange(value: boolean) {
    if (!value) resetServiceToEdit();
    setOpenForm(value);
  }

  function handleServiceEdit(testimonial: Service) {
    setServiceToEdit(testimonial);
    handleOpenChange(true);
  }

  if (isLoading) return <Spinner />;

  if (error) return <ErrorPage onRetry={refetchServices} />;
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
