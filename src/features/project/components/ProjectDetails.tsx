import { useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import MarkdownIt from "markdown-it";

import LinkButton from "@/components/LinkButton";
import Spinner from "@/components/Spinner";

import { useIncrementProjectViews } from "@/features/AdminProjects/hooks/useIncrementProjectViews";
import { useProject } from "@/features/AdminProjects/hooks/useProject";

const md = new MarkdownIt();

function ProjectDetails() {
  const { projectId } = useParams();

  const { updateViews } = useIncrementProjectViews();

  const { project, isLoading } = useProject(projectId);

  useEffect(() => {
    if (projectId) updateViews(projectId);
    console.log("hi");
  }, [projectId]);

  if (isLoading) return <Spinner />;

  if (!project) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <p>Project Not found</p>
        <div className="mb-4">
          <Link
            to="/portfolio"
            className="flex w-24 items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm"
          >
            <HiArrowLeft />
            <span>Back</span>
          </Link>
        </div>
      </div>
    );
  }

  const parsedContent = md.render(project.pitch);

  return (
    <section>
      <div className="container mx-auto mt-24 px-6 md:mt-28">
        <div className="mb-4">
          <Link
            to="/portfolio"
            className="flex w-24 items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm"
          >
            <HiArrowLeft />
            <span>Back</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:mx-auto md:grid-cols-2 md:gap-10">
          {/* left item */}
          <img
            src={project.image}
            alt={project.name}
            className="mx-auto h-96 w-full rounded-md object-cover md:h-[38rem] md:w-full"
          />

          {/* right item */}
          <div
            className="space-y-6 rounded-md md:h-[38rem] md:overflow-scroll md:border md:border-gray-200 md:p-5"
            id="project-table"
          >
            <h1 className="text-2xl font-extrabold text-gray-800">
              Name: <span className="text-gray-700">{project.name}</span>
            </h1>
            {/*  stautus*/}
            <div className="flex gap-x-2">
              <h1 className="text-xl font-extrabold text-gray-800">Status:</h1>
              <p
                className={`rounded-full border px-4 py-1 text-sm capitalize text-white ${project.status === "done" ? "border-green-200 bg-green-500" : "border-amber-200 bg-amber-500"}`}
              >
                {project.status.split("-").join(" ")}
              </p>
            </div>

            {/* roles */}
            <div className="flex gap-x-4">
              <h1 className="text-xl font-extrabold text-gray-800">Roles:</h1>
              <ul className="flex flex-1 flex-wrap gap-x-2 gap-y-4">
                {project.workedAs.map((work) => (
                  <li
                    className="rounded-full border border-gray-200 px-2 py-1 text-xs"
                    key={work.id}
                  >
                    {work.name}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm leading-6">
              <span className="line text-xl font-extrabold text-gray-800">
                Description:{" "}
              </span>
              {project.description}
            </p>

            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          </div>
        </div>
        {/* Button */}

        <div className="mt-10 sm:hidden">
          <LinkButton name="See all Works" to="/portfolio" />
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
