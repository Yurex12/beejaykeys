import Project from "@/features/project/components/Project";
import { projects } from "@/features/project/constants";

function ProjectsContainer() {
  return (
    <section>
      <div className="container mx-auto mt-28 px-6 md:mt-32">
        {/* content */}
        <div className="mt-12 flex flex-col justify-between gap-10 md:mt-20 md:flex-row">
          {projects.map((project) => (
            <Project {...project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsContainer;
