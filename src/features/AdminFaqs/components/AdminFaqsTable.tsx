import { useState } from "react";
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
import { ConfirmDelete } from "@/components/ConfirmDelete";

import { HiEllipsisVertical } from "react-icons/hi2";

import { useFaqs } from "../hooks/useFaqs";
import { useDeleteFaq } from "../hooks/useDeleteFaq";

import { Faq } from "../types";

export default function AdminFaqsTable({
  handleFaqEdit,
}: {
  handleFaqEdit: (testimonial: Faq) => void;
}) {
  const { faqs, isLoading, error } = useFaqs();
  const { deleteFaq, isDeleting } = useDeleteFaq();
  const [open, setOpen] = useState(false);
  const [faqId, setFaqId] = useState("");

  function handleDelete(id: string) {
    setOpen(true);
    setFaqId(id);
  }

  if (isLoading) return <p>Loading....</p>;

  if (error) return <p>Error</p>;

  if (!faqs?.length) return <p>No data found</p>;
  return (
    <>
      <section className="mt-10 md:overflow-scroll">
        <div className="px-6 md:px-14">
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Question</TableHead>
                <TableHead>Answer</TableHead>
                <TableHead>Edit/Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {faqs.map((faq) => (
                <TableRow key={faq._id}>
                  <TableCell className="whitespace-nowrap text-xs">
                    {faq.question}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-xs md:whitespace-normal">
                    {faq.answer}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="ml-8">
                        <HiEllipsisVertical className="text-2xl" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => handleFaqEdit(faq)}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(faq._id)}>
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
        resourceName="Faq"
        onConfirm={() => {
          deleteFaq(faqId, {
            onSettled: () => setOpen(false),
          });
        }}
        disabled={isDeleting}
      />
    </>
  );
}
