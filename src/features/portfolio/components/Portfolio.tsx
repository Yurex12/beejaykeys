import { useProjects } from "@/features/AdminProjects/hooks/useProjects";
import ProjectFilter from "./ProjectFilter";
import ProjectsContainer from "./ProjectsContainer";
import Spinner from "@/components/Spinner";

import ErrorPage from "@/components/ErrorPage";

function Portfolio() {
  const { isLoading, error, refetchProjects } = useProjects();
  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage onRetry={refetchProjects} />;
  return (
    <>
      <ProjectFilter />
      <ProjectsContainer />
    </>
  );
}

export default Portfolio;
