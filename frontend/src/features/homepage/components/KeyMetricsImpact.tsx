import Metric from "./Metric";

import { metrics } from "../constants";

function KeyMetricsImpact() {
  return (
    <section>
      <div className="md:mt-18 container mx-auto mt-20 px-8">
        <div className="flex flex-col gap-y-8 md:w-full md:flex-row md:justify-between md:gap-x-10">
          {metrics.map((metrics) => (
            <Metric {...metrics} key={metrics.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyMetricsImpact;
