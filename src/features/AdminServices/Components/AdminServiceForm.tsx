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
import { serviceSchema } from "@/schema/serviceSchema";
import { Input } from "@/components/ui/input";

export default function AdminServiceForm({
  closeServiceDialog,
}: {
  closeServiceDialog: () => void;
}) {
  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      description: "",
      roles: "",
    },
  });

  async function onSubmit(details: z.infer<typeof serviceSchema>) {
    await new Promise((res) => setTimeout(res, 2000));

    const newDetails = { ...details, roles: details.roles.split(",") };

    form.reset();
    console.log(newDetails);

    closeServiceDialog();
  }

  return (
    <div className="mt-4">
      <div className="mb-6">
        <label className="text-blue-gray-800 block text-left text-[1rem] font-semibold leading-6">
          Description
        </label>

        <Input
          className="mt-2 resize-none bg-gray-200 text-gray-600 focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
          placeholder="Write about the project."
          defaultValue={"ambassadorship-&-influence"
            .split("-")
            .join(" ")
            .toUpperCase()}
          disabled={true}
        />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-blue-gray-800 block text-left text-[1rem] font-semibold leading-6">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                    placeholder="Write about the project."
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="roles"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-blue-gray-800 block text-left text-[1rem] font-semibold leading-6">
                  Roles <span>(e.g one,two,three...)</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                    placeholder="one,two,three..."
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
              {form.formState.isSubmitting ? <SpinnerMini /> : "Edit Service"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
