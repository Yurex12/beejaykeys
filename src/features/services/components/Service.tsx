import { Service as ServiceType } from "../types";

function Service({ title, description, imageUrl }: ServiceType) {
  return (
    <div className="flex flex-col gap-y-3 rounded-md border border-gray-200 p-5">
      {/* icon */}
      <div className="text-5xl text-gray-800">{imageUrl}</div>
      {/* title */}
      <h1 className="text-xl font-extrabold text-gray-800">{title}</h1>
      {/* description */}
      <p>{description}</p>
    </div>
  );
}

export default Service;
