import Card from "@/components/Card";

import { workflows } from "../constants";

function BrandWorkFlow() {
  return (
    <section>
      <div className="container mx-auto mt-10 px-6 xl:mt-20">
        {/* heading */}
        <div className="flex items-center gap-x-4 md:gap-x-8">
          <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl lg:text-4xl xl:text-5xl">
            Our Workflow
          </h1>
          <div className="h-[2px] flex-1 rounded-full bg-gray-400"></div>
        </div>
        {/* workflow */}
        <div className="xl:md-8 mt-4 flex flex-col gap-y-8 md:mt-6 md:flex-row md:gap-x-6">
          {workflows.map((workflow) => (
            <Card {...workflow} key={workflow.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandWorkFlow;
