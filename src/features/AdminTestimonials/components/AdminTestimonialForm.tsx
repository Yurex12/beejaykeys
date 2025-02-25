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
import { Textarea } from "@/components/ui/textarea";
import { testimonialSchema } from "@/schema/testimonialSchema";
import { Input } from "@/components/ui/input";

export default function AdminTestimonialForm({
  closeTestimonialDialog,
}: {
  closeTestimonialDialog: () => void;
}) {
  const form = useForm<z.infer<typeof testimonialSchema>>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      review: "",
    },
  });

  async function onSubmit(details: z.infer<typeof testimonialSchema>) {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(details);

    form.reset();
    closeTestimonialDialog();
  }

  return (
    <Form {...form}>
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
                  disabled={form.formState.isSubmitting}
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
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            className="block w-32 bg-green-500 text-white hover:bg-green-600 disabled:cursor-not-allowed"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? <SpinnerMini /> : "Add Testimonial"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
