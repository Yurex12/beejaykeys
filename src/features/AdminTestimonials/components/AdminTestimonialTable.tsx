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

import { HiEllipsisVertical } from "react-icons/hi2";

import { ConfirmDelete } from "@/components/ConfirmDelete";
import NoData from "@/components/NoData";

import { useDeleteTestimonial } from "../hooks/useDeleteTestimonial";
import { useTestimonials } from "../hooks/useTestimonials";

import { Testimonial } from "../types";

export default function AdminTestimonialTable({
  handleTestimonialEdit,
}: {
  handleTestimonialEdit: (testimonial: Testimonial) => void;
}) {
  const [open, setOpen] = useState(false);
  const [testimonialId, setTestimonialId] = useState("");

  const { testimonials, isLoading, error } = useTestimonials();
  const { deleteTestimonial, isDeleting } = useDeleteTestimonial();

  function handleDelete(id: string) {
    setOpen(true);
    setTestimonialId(id);
  }

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>Error</p>;

  if (!testimonials?.length) return <NoData />;

  return (
    <>
      <section className="mt-10 md:overflow-scroll">
        <div className="px-6 md:px-14">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Review</TableHead>
                <TableHead>Edit/Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testimonials.map((testimonial) => (
                <TableRow key={testimonial._id}>
                  <TableCell className="whitespace-nowrap text-xs">
                    {testimonial.name}
                  </TableCell>
                  <TableCell className="text-xs">
                    {testimonial.review}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="ml-8">
                        <HiEllipsisVertical className="text-2xl" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => handleTestimonialEdit(testimonial)}
                        >
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(testimonial._id)}
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
        resourceName="Testimonial"
        onConfirm={() =>
          deleteTestimonial(testimonialId, {
            onSettled: () => setOpen(false),
          })
        }
        disabled={isDeleting}
      />
    </>
  );
}
