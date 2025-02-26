import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { faqSchema, TfaqSchema } from "@/schema/faqSchema";
import { Faq } from "../types";
import { useEditFaq } from "../hooks/useEditFaq";
import { useCreateFaq } from "../hooks/useCreateFaq";

export default function AdminFaqForm({
  closeFaqDialog,
  faqToEdit,
}: {
  closeFaqDialog: () => void;
  faqToEdit: Faq | {};
}) {
  const { editFaq, isEditing } = useEditFaq();
  const { createFaq, isDeleting } = useCreateFaq();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { _id: editId, ...otherValues } = faqToEdit;

  const isEditSession = Boolean(editId);

  const form = useForm<TfaqSchema>({
    resolver: zodResolver(faqSchema),
    defaultValues: isEditSession
      ? otherValues
      : {
          answer: "",
          question: "",
        },
  });

  const isWorking = isDeleting || isEditing || form.formState.isSubmitting;

  async function onSubmit(details: TfaqSchema) {
    if (isEditSession) {
      editFaq(
        { data: details, id: editId },
        {
          onSuccess: () => {
            form.reset();
            closeFaqDialog();
          },
        },
      );
    } else {
      createFaq(details, {
        onSuccess: () => {
          form.reset();
          closeFaqDialog();
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
                  disabled={isWorking}
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
                  disabled={isWorking}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <div className="flex justify-end">
            <Button
              type="submit"
              className="block w-fit bg-green-500 text-white hover:bg-green-600 disabled:cursor-not-allowed"
              disabled={isWorking}
            >
              {isWorking ? (
                <SpinnerMini />
              ) : (
                <span>{isEditSession ? "Edit Faq" : "Create Faq"}</span>
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
