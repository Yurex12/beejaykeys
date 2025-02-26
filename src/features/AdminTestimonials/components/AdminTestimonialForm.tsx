import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SpinnerMini from "@/components/SpinnerMini";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  testimonialSchema,
  TtestimonialData,
} from "@/schema/testimonialSchema";
import { useCreateTestimonials } from "../hooks/useCreateTestimonial";

import { useEditTestimonials } from "../hooks/useEditTestimonial";

import { Testimonial } from "../types";

export default function AdminTestimonialForm({
  closeTestimonialDialog,
  testimonailToEdit,
}: {
  closeTestimonialDialog: () => void;
  testimonailToEdit: Testimonial | {};
}) {
  const { isDeleting, createTestimonial } = useCreateTestimonials();
  const { editTestimonial, isEditing } = useEditTestimonials();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { _id: editId, color, ...otherValues } = testimonailToEdit;

  const isEditSession = Boolean(editId);

  const form = useForm<TtestimonialData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: isEditSession ? otherValues : { name: "", review: "" },
  });

  const isWorking = isDeleting || isEditing || form.formState.isSubmitting;

  async function onSubmit(details: TtestimonialData) {
    if (isEditSession) {
      editTestimonial(
        { data: details, id: editId },
        {
          onSuccess: () => {
            form.reset();
            closeTestimonialDialog();
          },
        },
      );
    } else {
      createTestimonial(details, {
        onSuccess: () => {
          form.reset();
          closeTestimonialDialog();
        },
      });
    }
  }

  return (
    <Form {...form}>
      <h1 className="text-xl text-gray-700">
        {isEditSession ? "Edit Testimonial" : "Create a new Testimonial"}
      </h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-gray-800 block text-left text-[1rem] font-semibold leading-6">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="John doe"
                  {...field}
                  className="resize-none focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                  disabled={isWorking}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-gray-800 block text-left text-[1rem] font-semibold leading-6">
                Review
              </FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                  placeholder="An amazing guy"
                  {...field}
                  disabled={isWorking}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            className="block w-fit bg-green-500 text-white hover:bg-green-600 disabled:cursor-not-allowed"
            disabled={isWorking}
          >
            {isWorking ? (
              <SpinnerMini />
            ) : (
              <span>
                {isEditSession ? "Edit Testimonial" : "Create Testimonial"}
              </span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
