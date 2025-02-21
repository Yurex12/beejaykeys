import Card from "@/components/Card";
import { reasons } from "../constants";

function HireMe() {
  return (
    <section>
      <div className="container mx-auto mt-20 px-6">
        <div className="flex flex-col xl:flex-row xl:gap-x-10">
          {/* Heading */}
          <h1 className="text-center text-xl font-extrabold capitalize text-gray-800 sm:text-3xl md:text-left lg:text-4xl xl:text-5xl">
            Why Hire me for your
            <span className="text-green-500"> Project?</span>
          </h1>
          {/* content */}

          <div className="mt-6 grid grid-cols-1 gap-y-10 md:mt-10 md:grid-cols-2 md:gap-x-8 md:gap-y-8 xl:mt-0">
            {reasons.map((reason) => (
              <Card {...reason} key={reason.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HireMe;
