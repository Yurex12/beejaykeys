import { useState } from "react";

import AdminContentHeader from "@/components/AdminContentHeader";
import CreateEditDialog from "@/components/CreateEditDialog";

import AdminLinkForm from "./AdminLinkForm";
import AdminLinksTable from "./AdminLinksTable";

import ErrorPage from "@/components/ErrorPage";
import Spinner from "@/components/Spinner";
import { useLinks } from "../hooks/useLinks";
import { Link } from "../types";
function AdminLinks() {
  const [openForm, setOpenForm] = useState(false);
  const [linkToEdit, setLinkToEdit] = useState<Link | {}>({});
  const { isLoading, error, refetchLinks } = useLinks();

  const resetServiceToEdit = () => setLinkToEdit({});

  function handleOpenChange(value: boolean) {
    if (!value) resetServiceToEdit();
    setOpenForm(value);
  }

  function handleServiceEdit(testimonial: Link) {
    setLinkToEdit(testimonial);
    handleOpenChange(true);
  }

  if (isLoading) return <Spinner />;

  if (error) return <ErrorPage onRetry={refetchLinks} />;
  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader title="Links" />
      <CreateEditDialog onOpenChange={handleOpenChange} open={openForm}>
        <AdminLinkForm
          closeLinkDialog={() => handleOpenChange(false)}
          linkToEdit={linkToEdit}
        />
      </CreateEditDialog>
      <AdminLinksTable handleServiceEdit={handleServiceEdit} />
    </div>
  );
}

export default AdminLinks;
