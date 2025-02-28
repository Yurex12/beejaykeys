import { FaCheckCircle, FaFolder, FaHourglassHalf } from "react-icons/fa";
import AdminProjectStat from "./AdminProjectStat";
import { useProjects } from "../hooks/useProjects";

function AdminProjectStats() {
  const { projects, error, isLoading } = useProjects();

  if (isLoading) return <p>Loading....</p>;

  if (error) return null;

  if (!projects?.length) return null;

  return (
    <section>
      <div className="mx-auto mt-10 px-8 md:px-14">
        <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-10">
          {/* Total Projects */}
          <AdminProjectStat
            count={projects.length}
            title="Total Projects"
            icon={<FaFolder className="text-gray-500" />}
          />

          {/* completed projects */}
          <AdminProjectStat
            count={
              projects.filter((project) => project.status === "done").length
            }
            title="Completed Projects"
            icon={<FaCheckCircle className="text-green-500" />}
          />

          {/* in progress */}

          <AdminProjectStat
            count={
              projects.filter((project) => project.status === "in-progress")
                .length
            }
            title="In progress"
            icon={<FaHourglassHalf className="text-yellow-400" />}
          />
        </div>
      </div>
    </section>
  );
}

export default AdminProjectStats;
