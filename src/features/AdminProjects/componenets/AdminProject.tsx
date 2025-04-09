import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminContentHeader from "@/components/AdminContentHeader";
import CreateEditDialog from "@/components/CreateEditDialog";
import ErrorPage from "@/components/ErrorPage";
import Spinner from "@/components/Spinner";

import AdminProjectStats from "./AdminProjectStats";
import AdminOperations from "./AdminOperations";
import AdminProjectForm from "./AdminProjectForm";
import AdminProjectListContainer from "./AdminProjectListContainer";
import AdminProjectsGridContainer from "./AdminProjectsGridContainer";

import { useProjects } from "../hooks/useProjects";
import { Project } from "../types";

function AdminProject() {
  const [openForm, setOpenForm] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<Project | {}>({});
  const [display, setDisplay] = useState(
    () => localStorage.getItem("display") || "grid",
  );

  useEffect(() => {
    localStorage.setItem("display", display);
  }, [display]);

  const { isLoading, refetchProjects, error } = useProjects();

  const navigate = useNavigate();

  const resetProjectToEdit = () => setProjectToEdit({});

  const handleDisplay = (value: string) => setDisplay(value);

  function handleOpenChange(value: boolean) {
    if (!value) resetProjectToEdit();
    setOpenForm(value);
  }

  function handleProjectToEdit(project: Project) {
    setProjectToEdit(project);
    handleOpenChange(true);
  }

  if (isLoading) return <Spinner />;

  if (error) return <ErrorPage onRetry={refetchProjects} />;
  return (
    <div className="flex flex-col md:h-screen">
      <AdminContentHeader
        title="Projects"
        onClick={
          display === "list"
            ? () => handleOpenChange(true)
            : () => navigate("/dashboard/projects/form")
        }
      />
      <CreateEditDialog
        open={openForm}
        onOpenChange={handleOpenChange}
        className="lg:max-w-4xl"
      >
        <AdminProjectForm
          closeProjectDialog={() => handleOpenChange(false)}
          projectToEdit={projectToEdit}
        />
      </CreateEditDialog>
      <AdminProjectStats />
      <AdminOperations display={display} handleDisplay={handleDisplay} />
      {display === "list" && (
        <AdminProjectListContainer handleProjectToEdit={handleProjectToEdit} />
      )}
      {display === "grid" && <AdminProjectsGridContainer />}
    </div>
  );
}

export default AdminProject;
