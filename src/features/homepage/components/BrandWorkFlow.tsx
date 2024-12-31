import { workflows } from "../constants";
import WorkFlow from "./WorkFlow";

function BrandWorkFlow() {
  return (
    <section>
      <div className="container mx-auto mt-10 px-6 xl:mt-20">
        <div className="grid grid-cols-[11rem_1fr] items-center sm:grid-cols-[14rem_1fr] lg:grid-cols-[18rem_1fr] xl:grid-cols-[22rem_1fr]">
          <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl lg:text-4xl xl:text-5xl">
            Our Workflow
          </h1>
          <div className="h-[2px] w-full rounded-full bg-gray-600"></div>
        </div>
        <div className="xl:md-8 mt-4 flex flex-col gap-y-8 md:mt-6 md:flex-row md:gap-x-6">
          {workflows.map((workflow) => (
            <WorkFlow {...workflow} key={workflow.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandWorkFlow;
