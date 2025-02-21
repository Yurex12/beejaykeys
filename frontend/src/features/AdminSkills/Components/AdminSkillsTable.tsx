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
import { services } from "@/features/homepage/constants";

export default function AdminSkillsTable() {
  return (
    <section className="mt-10 md:overflow-scroll">
      <div className="px-6 md:px-14">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="">Skill</TableHead>
              <TableHead className="">Roles</TableHead>
              <TableHead className="">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.title}>
                <TableCell className="whitespace-nowrap text-xs">
                  {service.title}
                </TableCell>
                <TableCell className="whitespace-nowrap text-xs md:whitespace-normal">
                  {service.roles.join(", ")}
                </TableCell>
                <TableCell className="flex items-center justify-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <HiEllipsisVertical className="text-2xl" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
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
