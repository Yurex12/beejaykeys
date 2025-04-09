import { useProjects } from "@/features/AdminProjects/hooks/useProjects";

import Project from "@/features/project/components/Project";
import { ProjectSkeleton } from "@/features/project/components/ProjectSkeleton";
import NotableWorksContainer from "./NotableWorksContainer";

function NotableWorks() {
  const { projects, isLoading, error } = useProjects();

  if (isLoading)
    return (
      <NotableWorksContainer>
        {[1, 2, 3].map((skeleton) => (
          <ProjectSkeleton key={skeleton} />
        ))}
      </NotableWorksContainer>
    );

  if (error) return null;

  if (!projects?.length) return null;

  return (
    <NotableWorksContainer>
      {projects
        .filter((_, i) => i < 3)
        .map((project) => (
          <Project {...project} key={project._id} />
        ))}
    </NotableWorksContainer>
  );
}

export default NotableWorks;
