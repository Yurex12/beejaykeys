import AdminContentHeader from "@/components/AdminContentHeader";
import AdminProjectStats from "./AdminProjectStats";
import { AdminProjectTable } from "./AdminProjectTable";
import CreateEditDialog from "@/components/CreateEditDialog";

import AdminProjectForm from "./AdminProjectForm";
import { useState } from "react";
import { Project } from "../types";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AdminProject() {
  const [openForm, setOpenForm] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<Project | {}>({});

  const resetProjectToEdit = () => setProjectToEdit({});

  function handleOpenChange(value: boolean) {
    if (!value) resetProjectToEdit();
    setOpenForm(value);
  }

  function handleProjectToEdit(project: Project) {
    setProjectToEdit(project);
    handleOpenChange(true);
  }
  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader
        title="Projects"
        onClick={() => handleOpenChange(true)}
      />
      <CreateEditDialog
        open={openForm}
        onOpenChange={handleOpenChange}
        className="lg:max-w-3xl"
      >
        <AdminProjectForm
          closeProjectDialog={() => handleOpenChange(false)}
          projectToEdit={projectToEdit}
        />
      </CreateEditDialog>
      <AdminProjectStats />
      <AdminProjectTable handleProjectToEdit={handleProjectToEdit} />
    </div>
  );
}

export default AdminProject;
