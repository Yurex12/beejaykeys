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
// import { services } from "@/features/homepage/constants";
import { Service } from "../types";
import { useServices } from "../hooks/useServices";

export default function AdminServiceTable({
  handleServiceEdit,
}: {
  handleServiceEdit: (service: Service) => void;
}) {
  const { services, isLoading, error } = useServices();

  if (isLoading) return <p>Loading....</p>;

  if (error) return <p>Error</p>;

  if (!services?.length) return <p>No data found</p>;
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
              <TableRow key={service._id}>
                <TableCell className="whitespace-nowrap text-xs">
                  {`${service.skill.split("-").join(" ").charAt(0).toUpperCase()}${service.skill.split("-").join(" ").slice(1)}`}
                </TableCell>
                <TableCell className="text-xs">{service.description}</TableCell>
                <TableCell className="text-xs">
                  <ul>
                    {service.roles.split(",").map((role) => (
                      <li key={role} className="whitespace-nowrap">
                        {role},
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
                      <DropdownMenuItem
                        onClick={() => handleServiceEdit(service)}
                      >
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
