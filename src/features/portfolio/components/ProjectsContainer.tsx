import NoData from "@/components/NoData";
import { useProjects } from "@/features/AdminProjects/hooks/useProjects";
import { Project as ProjectType } from "@/features/AdminProjects/types";
import Project from "@/features/project/components/Project";
import { useSearchParams } from "react-router-dom";

function ProjectsContainer() {
  const { projects } = useProjects();

  const [searchParams] = useSearchParams();

  if (!projects?.length) return <NoData content="No projects found." />;

  const filterValue = searchParams.get("project") || "all-works";

  let filteredProjects: ProjectType[] | [];

  if (filterValue === "project-ambassador") {
    filteredProjects = projects.filter((project) =>
      project.workedAs
        .map((x) => x.name.toLowerCase().trim().replace(" ", "-"))
        .includes(filterValue),
    );
  } else if (filterValue === "brand-ambassador") {
    filteredProjects = projects.filter((project) =>
      project.workedAs
        .map((x) => x.name.toLowerCase().trim().replace(" ", "-"))
        .includes(filterValue),
    );
  } else if (filterValue === "project-marketer") {
    filteredProjects = projects.filter((project) =>
      project.workedAs
        .map((x) => x.name.toLowerCase().trim().replace(" ", "-"))
        .includes(filterValue),
    );
  } else if (filterValue === "community-moderator") {
    filteredProjects = projects.filter((project) =>
      project.workedAs
        .map((x) => x.name.toLowerCase().trim().replace(" ", "-"))
        .includes(filterValue),
    );
  } else if (filterValue === "raider") {
    filteredProjects = projects.filter((project) =>
      project.workedAs
        .map((x) => x.name.toLowerCase().trim().replace(" ", "-"))
        .includes(filterValue),
    );
  } else if (filterValue === "shiller") {
    filteredProjects = projects.filter((project) =>
      project.workedAs
        .map((x) => x.name.toLowerCase().trim().replace(" ", "-"))
        .includes(filterValue),
    );
  } else {
    filteredProjects = projects;
  }

  if (!filteredProjects!?.length)
    return <NoData content="No projects found." />;

  return (
    <section>
      <div className="container mx-auto mt-4 px-6 md:mt-8">
        {/* content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects!.map((project) => (
            <Project {...project} key={project._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsContainer;
