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
import { questions } from "@/features/contact/components/Faq";
import { HiEllipsisVertical } from "react-icons/hi2";

export default function AdminFaqsTable() {
  return (
    <section className="mt-10 md:overflow-scroll">
      <div className="px-6 md:px-14">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Question</TableHead>
              <TableHead className="text-center">Answer</TableHead>
              <TableHead className="text-center">Edit/Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((question) => (
              <TableRow key={question.id}>
                <TableCell className="whitespace-nowrap text-xs">
                  {question.ques}
                </TableCell>
                <TableCell className="whitespace-nowrap text-xs md:whitespace-normal">
                  {question.ans}
                </TableCell>
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
