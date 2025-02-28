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

import { useState } from "react";
import { Project } from "../types";
import { ConfirmDelete } from "@/components/ConfirmDelete";
import { useProjects } from "../hooks/useProjects";
import { useDeleteProject } from "../hooks/useDeleteProject";

export function AdminProjectTable({
  handleProjectToEdit,
}: {
  handleProjectToEdit: (project: Project) => void;
}) {
  const { projects, isLoading, error } = useProjects();
  const { deleteProject, isDeleting } = useDeleteProject();
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState("");

  function handleDelete(id: string) {
    setOpen(true);
    setProjectId(id);
  }

  if (isLoading) return <p>Loading....</p>;

  if (error) return <p>Error</p>;

  if (!projects?.length) return <p>No data found</p>;
  return (
    <>
      <section className="mt-14 md:mt-10 md:overflow-scroll" id="project-table">
        <div className="px-6 md:px-14">
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>ImageUrl</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="whitespace-nowrap">Worked As</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Pitch</TableHead>
                <TableHead>Edit/Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project._id}>
                  <TableCell className="text-xs">{project.name}</TableCell>
                  <TableCell className="text-xs">
                    <img src={project.imageUrl} className="w-10" />
                  </TableCell>
                  <TableCell className="text-xs">
                    {project.description}
                  </TableCell>
                  <TableCell className="text-xs">
                    <ul>
                      {project.workedAs.split(",").map((work) => (
                        <li key={work}>{work},</li>
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
