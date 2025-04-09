import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiEllipsisVertical } from "react-icons/hi2";

import { ConfirmDelete } from "@/components/ConfirmDelete";
import { useState } from "react";
import { useDeleteProject } from "../hooks/useDeleteProject";
import { useProjects } from "../hooks/useProjects";
import { Project } from "../types";

import NoData from "@/components/NoData";
import { HiArchive } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

export default function AdminProjectListContainer({
  handleProjectToEdit,
}: {
  handleProjectToEdit: (project: Project) => void;
}) {
  const { projects, isLoading } = useProjects();
  const { deleteProject, isDeleting } = useDeleteProject();
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState("");

  const [searchParams] = useSearchParams();

  function handleDelete(id: string) {
    setOpen(true);
    setProjectId(id);
  }

  if (isLoading) return null;

  if (!projects?.length) return <NoData />;

  const filterValue = searchParams.get("status") || "all";
  const sortByValue = searchParams.get("sortBy") || "updatedAt";

  let filteredProject: Project[] | [];

  if (filterValue === "in-progress")
    filteredProject = projects.filter(
      (project) => project.status === "in-progress",
    );
  else if (filterValue === "done")
    filteredProject = projects.filter((project) => project.status === "done");
  else filteredProject = projects;

  if (!filteredProject!?.length)
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-y-2">
        <HiArchive className="text-3xl" />
        <h1 className="text-xl">Nothing to display</h1>
      </div>
    );

  let sortedProject;

  if (sortByValue === "createdAt")
    sortedProject = filteredProject!.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    );
  else if (sortByValue === "name") {
    sortedProject = filteredProject!
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  } else {
    sortedProject = filteredProject!.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    );
  }

  return (
    <>
      <section className="mt-5 md:mt-10 md:overflow-scroll" id="project-table">
        <div className="px-6 md:px-14">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="whitespace-nowrap">Worked As</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Pitch</TableHead>
                <TableHead>Edit/Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedProject.map((project) => (
                <TableRow key={project._id}>
                  <TableCell className="text-xs">{project.name}</TableCell>
                  <TableCell className="text-xs">
                    <img src={project.image} className="w-10" />
                  </TableCell>
                  <TableCell className="text-xs">
                    {project.description}
                  </TableCell>
                  <TableCell className="text-xs">
                    <ul>
                      {project.workedAs.map((work) => (
                        <li key={work.id}>{work.name},</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-xs">
                    {project.status
                      .split("-")
                      .join(" ")
                      .charAt(0)
                      .toUpperCase() +
                      project.status
                        .split("-")
                        .join(" ")
                        .slice(1)
                        .toLowerCase()}
                  </TableCell>
                  <TableCell className="text-xs">{project.pitch}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="ml-8">
                        <HiEllipsisVertical className="text-2xl" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => handleProjectToEdit(project)}
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(project._id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <ConfirmDelete
        open={open}
        handleOpen={setOpen}
        resourceName="Project"
        onConfirm={() => {
          deleteProject(projectId, {
            onSettled: () => setOpen(false),
          });
        }}
        disabled={isDeleting}
      />
    </>
  );
}
