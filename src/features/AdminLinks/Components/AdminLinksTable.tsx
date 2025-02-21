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

const links = [
  {
    name: "twitter",
    url: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, id!",
  },
  {
    name: "facebook",
    url: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, id!",
  },
  {
    name: "telegram",
    url: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, id!",
  },
];

export default function AdminLinksTable() {
  return (
    <section className="mt-10 md:overflow-scroll">
      <div className="px-6 md:px-14">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Link</TableHead>
              <TableHead className="text-center">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links.map((link) => (
              <TableRow key={link.name}>
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
