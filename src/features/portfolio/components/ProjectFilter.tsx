import { useSearchParams } from "react-router-dom";

const projects = [
  { id: "all-works", title: "All works" },
  { id: "project-ambassador", title: "Project Ambassador" },
  { id: "brand-ambassador", title: "Brand Ambassador" },

  { id: "human-resource-manager", title: "Human Resource Manager" },
  { id: "community-moderator", title: "Community moderator" },
  { id: "social-media-manager", title: "Social Media Manager" },
];

function ProjectFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeProject = searchParams.get("project") || "all-works";

  function handleProject(value: string) {
    searchParams.set("project", value);
    setSearchParams(searchParams);
  }

  return (
    <section>
      <div className="container mx-auto mt-28 px-6 md:mt-32">
        <ul className="mx-auto flex max-w-fit gap-x-2 overflow-y-scroll rounded-full border px-2 py-2">
          {projects.map((project) => (
            <li
              className={`cursor-pointer whitespace-nowrap rounded-full border border-white px-3 py-2 text-sm md:text-base ${project.id === activeProject ? "border-gray-400 bg-gray-100" : ""}`}
              key={project.id}
              onClick={() => handleProject(project.id)}
            >
              {project.title}
            </li>
          ))}
        </ul>

        <h1 className="mt-8 text-center text-2xl font-extrabold capitalize text-gray-700 sm:text-3xl lg:text-4xl xl:text-5xl">
          {activeProject.split("-").join(" ")}
        </h1>
      </div>
    </section>
  );
}

export default ProjectFilter;
