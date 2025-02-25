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

export default function AdminServiceTable({
  openServiceDialog,
}: {
  openServiceDialog: () => void;
}) {
  return (
    <section className="mt-10 md:overflow-scroll">
      <div className="px-6 md:px-14">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>Skill</TableHead>
              <TableHead>Descripion</TableHead>
              <TableHead>Roles</TableHead>
              <TableHead>Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.title}>
                <TableCell className="truncate text-xs">
                  {service.title}
                </TableCell>
                <TableCell className="text-xs">{service.description}</TableCell>
                <TableCell className="text-xs">
                  <ul>
                    {service.roles.map((role, i) => (
                      <li>
                        {role}
                        {i === service.roles.length - 1 ? "." : ","}
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell className="flex items-center justify-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <HiEllipsisVertical className="text-2xl" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={openServiceDialog}>
                        Edit
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
  );
}
