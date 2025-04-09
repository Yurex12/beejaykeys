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
import { projectSchema, TprojectSchema } from "@/schema/projectSchema";
import { useCreateProject } from "../hooks/useCreateProject";
import { useEditProject } from "../hooks/useEditProject";
import { Project } from "../types";

import ReactTag from "@/components/ReactTag";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();

export default function AdminFaqForm({
  closeProjectDialog,
  projectToEdit,
}: {
  closeProjectDialog: () => void;
  projectToEdit: Project | {};
}) {
  const { editProject, isEditing } = useEditProject();
  const { createProject, isDeleting } = useCreateProject();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { _id: editId, ...otherValues } = projectToEdit;

  const isEditSession = Boolean(editId);

  const form = useForm<TprojectSchema>({
    resolver: zodResolver(projectSchema),
    defaultValues: isEditSession
      ? otherValues
      : {
          name: "",
          description: "",
          pitch: "",
          status: "in-progress",
          workedAs: [],
        },
  });

  const isWorking = isDeleting || isEditing || form.formState.isSubmitting;

  async function onSubmit(details: TprojectSchema) {
    if (isEditSession) {
      details?.image[0]?.name === undefined
        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (details.image = otherValues.image)
        : (details.image = details.image[0]);
      editProject(
        { data: details, id: editId },
        {
          onSuccess: () => {
            form.reset();
            closeProjectDialog();
          },
        },
      );
    } else {
      createProject(
        { ...details, image: details.image[0] },
        {
          onSuccess: () => {
            form.reset();
            closeProjectDialog();
          },
        },
      );
    }
  }

  return (
    <Form {...form}>
      <h1 className="text-xl text-gray-700">
        {isEditSession ? "Edit Project" : "Create a new Project"}
      </h1>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 space-y-2 lg:space-y-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[6rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                Name
              </FormLabel>
              <div>
                <FormControl>
                  <Input
                    placeholder="project name"
                    {...field}
                    className="placeholder:text-xs focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                    disabled={isWorking}
                  />
                </FormControl>
                <FormMessage className="mt-2 text-xs sm:text-sm" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[6rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                Image
              </FormLabel>
              <div>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files)}
                    disabled={isWorking}
                  />
                </FormControl>
                <FormMessage className="mt-2 text-xs sm:text-sm" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[6rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                Description
              </FormLabel>
              <div>
                <FormControl>
                  <Textarea
                    className="resize-none placeholder:text-xs focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                    placeholder="Amazing offer"
                    {...field}
                    disabled={isWorking}
                  />
                </FormControl>
                <FormMessage className="mt-2 text-xs sm:text-sm" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[6rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                Status
              </FormLabel>
              <div>
                <FormControl>
                  <select
                    disabled={isWorking}
                    onChange={(e) => field.onChange(e.target.value)}
                    value={field.value}
                    className="w-full rounded-md border px-3 py-2 text-gray-500 transition-colors duration-200 placeholder:text-xs focus:border focus:border-green-500 focus:outline-none"
                  >
                    <option value="done">Done</option>
                    <option value="in-progress">In progress</option>
                  </select>
                </FormControl>
                <FormMessage className="mt-2 text-xs sm:text-sm" />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workedAs"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[6rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                Worked As
              </FormLabel>
              <div>
                <FormControl>
                  <ReactTag tags={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage className="mt-2 text-xs sm:text-sm" />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pitch"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-between gap-x-4 md:grid md:grid-cols-[6rem_1fr]">
              <FormLabel className="text-blue-gray-800 mt-3 block text-left text-[1rem] font-semibold leading-6">
                Pitch
              </FormLabel>
              <div>
                <MdEditor
                  value={field.value}
                  style={{ height: "170px" }}
                  renderHTML={(text) => mdParser.render(text)}
                  onChange={({ text }) => field.onChange(text)}
                />
                <FormControl></FormControl>
                <FormMessage className="mt-2 text-xs sm:text-sm" />
              </div>
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
                <span>{isEditSession ? "Edit Project" : "Create Project"}</span>
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
