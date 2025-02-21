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
import { projects } from "@/features/project/constants";

export type Project = {
  id: number;
  name: string;
  desc: string;
  workedAs: string[];
  imageUrl: string;
  status: "done" | "in-progress";
  solution: string;
  result: string;
  problem: string;
  conclusion: string;
};

export function AdminProjectTable() {
  return (
    <section className="mt-14 md:mt-10 md:overflow-scroll" id="project-table">
      <div className="px-6 md:px-14">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">ImageUrl</TableHead>
              <TableHead className="text-center">Description</TableHead>
              <TableHead className="text-center">Worked As</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Solution</TableHead>
              <TableHead className="text-center">Result</TableHead>
              <TableHead className="text-center">Problem</TableHead>
              <TableHead className="text-center">Conclusion</TableHead>
              <TableHead className="text-center">Edit/Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="text-xs">{project.name}</TableCell>
                <TableCell className="text-xs">
                  <img src={project.imageUrl} className="w-10" />
                </TableCell>
                <TableCell className="text-xs">{project.desc}</TableCell>
                <TableCell className="text-xs">
                  <span>{project.workedAs.join(", ")}</span>
                </TableCell>
                <TableCell className="text-xs">{project.status}</TableCell>
                <TableCell className="text-xs">{project.solution}</TableCell>
                <TableCell className="text-xs">{project.result}</TableCell>
                <TableCell className="text-xs">{project.problem}</TableCell>
                <TableCell className="text-xs">{project.conclusion}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="ml-8">
                      <HiEllipsisVertical className="text-2xl" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
