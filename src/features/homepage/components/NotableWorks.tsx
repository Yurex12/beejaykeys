import { Button } from "@/components/ui/button";

import Project from "@/features/project/components/Project";
import { projects } from "@/features/project/constants";

function NotableWorks() {
  return (
    <section>
      <div className="container mx-auto mt-20 px-6">
        {/* Heading */}
        <div className="flex items-center gap-x-4 md:gap-x-8">
          <div className="h-[2px] flex-1 rounded-full bg-gray-400"></div>
          <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl lg:text-4xl xl:text-5xl">
            Notable Works
          </h1>
        </div>
        {/* content */}
        <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row">
          {projects.map((project) => (
            <Project {...project} key={project.id} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <Button className="rounded-md border border-green-600 bg-white px-6 py-2 text-sm text-green-600 shadow hover:bg-green-600 hover:text-white md:px-8 md:text-base">
            See all Works
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NotableWorks;
