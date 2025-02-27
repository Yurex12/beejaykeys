import { useState } from "react";

import AdminContentHeader from "@/components/AdminContentHeader";
import CreateEditDialog from "@/components/CreateEditDialog";

import AdminLinksTable from "./AdminLinksTable";
import AdminLinkForm from "./AdminLinkForm";

import { Link } from "../types";
function AdminLinks() {
  const [openForm, setOpenForm] = useState(false);
  const [linkToEdit, setLinkToEdit] = useState<Link | {}>({});

  const resetServiceToEdit = () => setLinkToEdit({});

  function handleOpenChange(value: boolean) {
    if (!value) resetServiceToEdit();
    setOpenForm(value);
  }

  function handleServiceEdit(testimonial: Link) {
    setLinkToEdit(testimonial);
    handleOpenChange(true);
  }
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
