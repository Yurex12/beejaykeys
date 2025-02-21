import { Link, useParams } from "react-router-dom";
import { projects } from "../constants";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find((project) => project.id === Number(projectId));

  //   if (!project) {
  //     return <h1 className="mt-40">No project found</h1>;
  //   }

  return (
    <section>
      <div className="container mx-auto mt-24 px-6 md:mt-28">
        {project ? (
          <div className="space-y-8 md:mx-auto md:max-w-[768px]">
            <img
              src={project.imageUrl}
              alt=""
              className="mx-auto rounded-md md:max-h-[500px] md:w-full md:object-cover md:object-top"
            />
            {/*  stautus*/}
            <div className="flex gap-x-2">
              <h1 className="text-xl font-extrabold text-gray-800">status:</h1>
              <p
                className={`rounded-full border px-4 py-1 text-sm capitalize text-white ${project.status === "done" ? "border-green-200 bg-green-500" : "border-amber-200 bg-amber-500"}`}
              >
                {project.status.split("-").join(" ")}
              </p>
              <p></p>
            </div>

            {/* roles */}
            <div className="flex gap-x-4">
              <h1 className="text-xl font-extrabold text-gray-800">Roles:</h1>
              <ul className="flex flex-1 flex-wrap gap-x-2 gap-y-4">
                {project.workedAs.map((work) => (
                  <li
                    className="rounded-full border border-gray-200 px-2 py-1 text-xs"
                    key={work}
                  >
                    {work}
                  </li>
                ))}
              </ul>
            </div>

            {/*  name & desc*/}
            <div className="space-y-2">
              <h1 className="text-xl font-extrabold text-gray-800">
                {project.name}:{" "}
              </h1>
              <p>{project.desc}</p>
              <p></p>
            </div>

            {/* challenges*/}
            <div className="space-y-2">
              <h1 className="text-xl font-extrabold text-gray-800">
                Challenges:
              </h1>
              <p>{project.problem}</p>
              <p></p>
            </div>

            {/* solution*/}
            <div className="space-y-2">
              <h1 className="text-xl font-extrabold text-gray-800">
                Solution:
              </h1>
              <p>{project.solution}</p>
              <p></p>
            </div>

            {/* Result*/}
            {project.status === "done" && (
              <div className="space-y-2">
                <h1 className="text-xl font-extrabold text-gray-800">
                  Result:
                </h1>
                <p>{project.result}</p>
                <p></p>
              </div>
            )}

            {/* Conclusion*/}
            {project.status === "done" && (
              <div className="space-y-2">
                <h1 className="text-xl font-extrabold text-gray-800">
                  Conclusion:
                </h1>
                <p>{project.conclusion}</p>
                <p></p>
              </div>
            )}
          </div>
        ) : (
          <h1 className="text-center text-xl">No project found</h1>
        )}

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/portfolio"
            className="rounded-md border border-green-600 bg-green-600 px-6 py-2 text-sm text-white shadow hover:bg-white hover:text-green-600 md:px-8 md:text-base"
          >
            See all Works
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
