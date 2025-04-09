import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HiArchive } from "react-icons/hi";

import { ConfirmDelete } from "@/components/ConfirmDelete";
import NoData from "@/components/NoData";
import AdminProjects from "./AdminProjects";

import { useDeleteProject } from "../hooks/useDeleteProject";
import { useProjects } from "../hooks/useProjects";

import { Project } from "../types";

function AdminProjectsGridContainer() {
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState("");
  const { projects, isLoading } = useProjects();
  const { deleteProject, isDeleting } = useDeleteProject();
  const [searchParams] = useSearchParams();

  function handleDelete(projectId: string) {
    setProjectId(projectId);
    setOpen(true);
  }

  if (isLoading) return null;

  if (!projects?.length) return <NoData />;

  const filterValue = searchParams.get("status") || "all";
  const sortByValue = searchParams.get("sortBy") || "updatedAt";

  let filteredProject: Project[] | [];

  if (filterValue === "in-progress") {
    filteredProject = projects.filter(
      (project) => project.status === "in-progress",
    );
  } else if (filterValue === "done") {
    filteredProject = projects.filter((project) => project.status === "done");
  } else {
    filteredProject = projects;
  }

  if (!filteredProject!?.length) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-y-2">
        <HiArchive className="text-3xl" />
        <h1 className="text-xl">Nothing to display</h1>
      </div>
    );
  }

  let sortedProject;

  if (sortByValue === "name") {
    sortedProject = filteredProject!
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortByValue === "updatedAt") {
    sortedProject = filteredProject!.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    );
  } else {
    sortedProject = filteredProject!.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    );
  }

  return (
    <>
      <section>
        <div className="mx-auto px-8 py-5 md:px-14">
          <div className="gap flex flex-col flex-wrap items-center justify-start gap-8 md:flex-row">
            {sortedProject!.map((project) => (
              <AdminProjects
                {...project}
                key={project._id}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </section>
      <ConfirmDelete
        handleOpen={setOpen}
        open={open}
        onConfirm={() =>
          deleteProject(projectId, {
            onSuccess: () => {
              setOpen(false);
            },
          })
        }
        disabled={isDeleting}
        resourceName="Project"
      />
    </>
  );
}

export default AdminProjectsGridContainer;
