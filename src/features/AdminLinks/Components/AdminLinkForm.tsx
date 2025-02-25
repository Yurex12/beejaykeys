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
import { linkSchema } from "@/schema/linkSchema";

export default function AdminLinkForm({
  closeLinkDialog,
}: {
  closeLinkDialog: () => void;
}) {
  const form = useForm<z.infer<typeof linkSchema>>({
    resolver: zodResolver(linkSchema),
    defaultValues: {
      url: "",
    },
  });

  async function onSubmit(details: z.infer<typeof linkSchema>) {
    await new Promise((res) => setTimeout(res, 2000));

    form.reset();
    console.log(details);

    closeLinkDialog();
  }

  return (
    <div className="mt-4">
      <div className="mb-6">
        <label className="text-blue-gray-800 block text-left text-[1rem] font-semibold leading-6">
          Name
        </label>

        <Input
          className="mt-2 resize-none bg-gray-200 text-gray-600 focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
          placeholder="Write about the project."
          defaultValue={"Instagram"}
          disabled={true}
        />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-blue-gray-800 block text-left text-[1rem] font-semibold leading-6">
                  Url
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                    placeholder="https://www...."
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
              {form.formState.isSubmitting ? <SpinnerMini /> : "Edit Link"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
