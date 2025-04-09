import { Link } from "react-router-dom";

import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { Project as ProjectProps } from "../types";

function Project({
  image,
  name,
  workedAs,
  description,
  _id: projectId,
}: Partial<ProjectProps>) {
  return (
    <Link
      className="group flex flex-col gap-y-4 rounded-md"
      to={`/portfolio/projects/${projectId}`}
    >
      <img
        src={image}
        alt={name}
        className="h-[26rem] w-full rounded-md object-cover group-hover:scale-95 group-hover:duration-300"
      />
      <h1 className="text-xl font-extrabold text-gray-800">{name}</h1>
      <p>{description}</p>
      <div className="flex flex-1 items-start gap-x-2">
        <ul className="flex flex-1 flex-wrap gap-x-2 gap-y-4">
          {workedAs?.map((work) => (
            <li
              className="rounded-full border border-gray-200 px-4 py-2 text-sm"
              key={work.id}
            >
              {work.name}
            </li>
          ))}
        </ul>

        <HiOutlineArrowRightCircle className="text-2xl text-gray-800 hover:text-green-500 group-hover:animate-pulse group-hover:text-green-500 md:text-3xl" />
      </div>
    </Link>
  );
}

export default Project;
