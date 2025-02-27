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
import { useLinks } from "../hooks/useLinks";
import { Link } from "../types";

export default function AdminLinksTable({
  handleServiceEdit,
}: {
  handleServiceEdit: (link: Link) => void;
}) {
  const { links, isLoading, error } = useLinks();

  if (isLoading) return <p>Loading....</p>;

  if (error) return <p>Error</p>;

  if (!links?.length) return <p>No data found</p>;
  return (
    <section className="mt-10 md:overflow-scroll">
      <div className="px-6 md:px-14">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Link</TableHead>
              <TableHead className="text-center">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links.map((link) => (
              <TableRow key={link._id}>
                <TableCell className="whitespace-nowrap text-center text-xs">
                  {link.name}
                </TableCell>
                <TableCell className="whitespace-nowrap text-center text-xs md:whitespace-normal">
                  {link.url}
                </TableCell>
                <TableCell className="flex items-center justify-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <HiEllipsisVertical className="text-2xl" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => handleServiceEdit(link)}>
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
