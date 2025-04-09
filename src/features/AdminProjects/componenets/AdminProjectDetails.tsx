import { useEffect } from "react";

import { Link, useSearchParams } from "react-router-dom";
import { useProject } from "../hooks/useProject";

import { projectSchema, TprojectSchema } from "@/schema/projectSchema";
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
import MarkdownIt from "markdown-it";
import { HiArrowLeft } from "react-icons/hi";
import { useCreateProject } from "../hooks/useCreateProject";
import { useEditProject } from "../hooks/useEditProject";

import ErrorPage from "@/components/ErrorPage";
import NoData from "@/components/NoData";
import Spinner from "@/components/Spinner";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import ReactTag from "@/components/ReactTag";

const mdParser = new MarkdownIt();

function AdminProjectDetails() {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");

  const { project, isLoading, refetchProject, error } = useProject(
    projectId || undefined,
  );
  const { createProject, isDeleting } = useCreateProject();

  const { editProject, isEditing } = useEditProject();

  const isEditSession = !!projectId;
  const isWorking = isEditing || isDeleting;

  const form = useForm<TprojectSchema>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      description: "",
      pitch: "",
      workedAs: [],
      status: "in-progress",
    },
  });

  useEffect(() => {
    if (project) {
      form.reset(project);
    }
  }, [project, form]);

  async function onSubmit(details: TprojectSchema) {
    if (isEditSession) {
      details?.image[0]?.name === undefined
        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (details.image = project.image)
        : (details.image = details.image[0]);
      editProject(
        { data: details, id: projectId },
        {
          onSuccess: () => {
            form.reset();
            history.back();
          },
        },
      );
    } else {
      createProject(
        { ...details, image: details.image[0] },
        {
          onSuccess: () => {
            form.reset();
            history.back();
          },
        },
      );
    }
  }

  if (isLoading) return <Spinner />;

  if (projectId && !project)
    return <NoData content="Project Does not exists." />;

  if (error) return <ErrorPage onRetry={refetchProject} />;

  return (
    <section className="mt-24">
      <div className="mx-auto h-full space-y-2 px-8 md:px-14">
        <div className="flex gap-x-4">
          <Link
            to="/dashboard/projects"
            className="flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm"
          >
            <HiArrowLeft />
            <span>Back</span>
          </Link>

          {project && (
            <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl">
              Project #{`{${project.name}}`}
            </h1>
          )}
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 pb-20 pt-4 md:w-11/12 lg:space-y-5"
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
                        autoFocus
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
                        className="placeholder:text-xs focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
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
                        {...field}
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
                    <FormControl>
                      <MdEditor
                        className="h-[10rem] placeholder:text-xs focus-visible:border-0 focus-visible:ring-1 focus-visible:ring-green-500"
                        value={field.value}
                        style={{ height: "170px" }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={({ text }) => field.onChange(text)}
                      />
                    </FormControl>
                    <FormMessage className="mt-2 text-xs sm:text-sm" />
                  </div>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <div className="flex justify-end gap-x-4">
                <Button
                  className="w-20"
                  variant="outline"
                  type="button"
                  onClick={() => history.back()}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="w-32 bg-green-500 text-white hover:bg-green-600 disabled:cursor-not-allowed"
                  disabled={isWorking}
                >
                  {isWorking ? (
                    <SpinnerMini />
                  ) : (
                    <span>{projectId ? "Edit Project" : "Create Project"}</span>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}

export default AdminProjectDetails;
