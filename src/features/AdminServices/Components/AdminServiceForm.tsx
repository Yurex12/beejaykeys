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
import { Textarea } from "@/components/ui/textarea";
import { serviceSchema, TserviceSchema } from "@/schema/serviceSchema";
import { useEditService } from "../hooks/useEditService";
import { Service } from "../types";

export default function AdminServiceForm({
  closeServiceDialog,
  serviceToEdit,
}: {
  closeServiceDialog: () => void;
  serviceToEdit: Service | {};
}) {
  const { editService, isEditing } = useEditService();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { _id: editId, skill, ...otherValues } = serviceToEdit;

  const form = useForm<TserviceSchema>({
    resolver: zodResolver(serviceSchema),
    defaultValues: otherValues || {},
  });

  async function onSubmit(details: TserviceSchema) {
    // await new Promise((res) => setTimeout(res, 2000));

    editService(
      { data: details, id: editId },
      {
        onSuccess: () => {
          form.reset();
          closeServiceDialog();
        },
      },
    );
  }

  const isWorking = isEditing || form.formState.isSubmitting;

  return (
    <div>
      <h1 className="mb-4 text-xl text-gray-700">Edit Service</h1>
      <div className="mb-6">
        <label className="text-blue-gray-800 block text-left text-[1rem] font-semibold leading-6">
          Skill
        </label>

        <Input
          className="mt-2 resize-none bg-gray-200 text-gray-600 focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
          placeholder="Write about the project."
          defaultValue={skill?.split("-").join(" ").toUpperCase()}
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
                    disabled={isWorking}
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
              {isWorking ? <SpinnerMini /> : "Edit Service"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
