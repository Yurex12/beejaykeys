import LinkButton from "@/components/LinkButton";
import { ReactNode } from "react";

function NotableWorksContainer({ children }: { children: ReactNode }) {
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
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {children}
        </div>

        {/* Button */}
        <div className="mt-10">
          <LinkButton name="See all Works" to="/portfolio" />
        </div>
      </div>
    </section>
  );
}

export default NotableWorksContainer;
