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
import { faqSchema } from "@/schema/faqSchema";

export default function AdminFaqForm({
  closeFaqDialog,
}: {
  closeFaqDialog: () => void;
}) {
  const form = useForm<z.infer<typeof faqSchema>>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      answer: "",
      question: "",
    },
  });

  async function onSubmit(details: z.infer<typeof faqSchema>) {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(details);

    form.reset();
    closeFaqDialog();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-6">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-gray-800 block text-left text-[1rem] font-semibold leading-6">
                Question
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="whats your name"
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
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-blue-gray-800 block text-left text-[1rem] font-semibold leading-6">
                Answer
              </FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                  placeholder="Beejakeys"
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
            {form.formState.isSubmitting ? <SpinnerMini /> : "Add Faq"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
