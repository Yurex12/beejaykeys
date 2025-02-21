import { WorkFlow as WorkFlowProps } from "../types";

function WorkFlow({ icon, title, description }: WorkFlowProps) {
  return (
    <div className="space-y-4 rounded-md border border-gray-200 p-5">
      {/* icon */}
      <div className="text-5xl">{icon}</div>
      {/* title */}
      <h1 className="text-xl font-extrabold text-gray-800">{title}</h1>
      {/* description */}
      <p>{description}</p>
    </div>
  );
}

export default WorkFlow;
