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
import { Input } from "@/components/ui/input";
import { linkSchema, TlinkSchema } from "@/schema/linkSchema";
import { Link } from "../types";
import { useEditLink } from "../hooks/useEditLink";

export default function AdminLinkForm({
  closeLinkDialog,
  linkToEdit,
}: {
  closeLinkDialog: () => void;
  linkToEdit: Link | {};
}) {
  const { editLink, isEditing } = useEditLink();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { _id: editId, name, ...otherValues } = linkToEdit;

  const form = useForm<TlinkSchema>({
    resolver: zodResolver(linkSchema),
    defaultValues: otherValues || {},
  });

  async function onSubmit(details: TlinkSchema) {
    editLink(
      { data: details, id: editId },
      {
        onSuccess: () => {
          form.reset();
          closeLinkDialog();
        },
      },
    );
  }

  const isWorking = isEditing || form.formState.isSubmitting;

  return (
    <div>
      <h1 className="mb-4 text-xl text-gray-700">Edit Link</h1>
      <div className="mb-6">
        <label className="text-blue-gray-800 block text-left text-[1rem] font-semibold leading-6">
          Name
        </label>

        <Input
          className="mt-2 resize-none bg-gray-200 text-gray-600 focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
          placeholder="Write about the project."
          defaultValue={name || ""}
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
              className="block w-32 bg-green-500 text-white hover:bg-green-600 disabled:cursor-not-allowed"
              disabled={isWorking}
            >
              {isWorking ? <SpinnerMini /> : "Edit Link"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
