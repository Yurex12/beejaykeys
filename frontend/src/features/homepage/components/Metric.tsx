import { Metric as MetricProps } from "../types";

function Metric({ value, title }: MetricProps) {
  return (
    <div className="flex-1 space-y-4 border-l-2 border-l-green-500 p-5 md:text-center">
      <p className="text-2xl font-bold text-green-600">{value}</p>
      <p className="text-xl">{title}</p>
    </div>
  );
}

export default Metric;
