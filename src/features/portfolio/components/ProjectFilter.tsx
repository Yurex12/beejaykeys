import { useProjects } from "@/features/AdminProjects/hooks/useProjects";
import { projectsName } from "@/features/project/constants";
import { useSearchParams } from "react-router-dom";

function ProjectFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { projects } = useProjects();

  const activeProject = searchParams.get("project") || "all-works";

  function handleProject(value: string) {
    searchParams.set("project", value);
    setSearchParams(searchParams);
  }

  if (!projects?.length) return null;

  return (
    <section>
      <div className="container mx-auto mt-24 px-6 md:mt-32">
        <ul className="mx-auto flex max-w-fit gap-x-2 overflow-y-scroll rounded-full border px-2 py-2">
          {projectsName.map((project) => (
            <li
              className={`cursor-pointer whitespace-nowrap rounded-full border border-white px-3 py-2 text-sm md:text-base ${project.id === activeProject ? "border-gray-400 bg-gray-100" : ""}`}
              key={project.id}
              onClick={() => handleProject(project.id)}
            >
              {project.title}
            </li>
          ))}
        </ul>

        <h1 className="mt-4 text-center text-2xl font-extrabold capitalize text-gray-700 sm:text-3xl md:mt-8 lg:text-4xl xl:text-5xl">
          {activeProject.split("-").join(" ")}
        </h1>
      </div>
    </section>
  );
}

export default ProjectFilter;
