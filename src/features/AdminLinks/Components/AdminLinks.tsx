import AdminContentHeader from "@/components/AdminContentHeader";
import AdminLinksTable from "./AdminLinksTable";
import CreateEditDialog from "@/components/CreateEditDialog";
import AdminLinkForm from "./AdminLinkForm";
import { useState } from "react";
function AdminLinks() {
  const [open, setOpen] = useState(false);

  const openServiceDialog = () => setOpen(true);
  const closeServiceDialog = () => setOpen(false);
  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader title="Links" />
      <CreateEditDialog onOpenChange={setOpen} open={open} title="Edit link">
        <AdminLinkForm closeLinkDialog={closeServiceDialog} />
      </CreateEditDialog>
      <AdminLinksTable openServiceDialog={openServiceDialog} />
    </div>
  );
}

export default AdminLinks;
