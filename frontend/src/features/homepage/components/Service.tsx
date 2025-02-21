import { Service as ServiceType } from "../types";

function Service({ title, description, icon, roles }: ServiceType) {
  return (
    <div className="space-y-4 rounded-md border border-gray-200 p-5">
      {/* icon */}
      <div className="text-5xl">{icon}</div>
      {/* title */}
      <h1 className="text-xl font-extrabold text-gray-800">{title}</h1>
      {/* description */}
      <p>{description}</p>

      <ul className="flex flex-1 flex-wrap gap-x-2 gap-y-4">
        {roles.map((role) => (
          <li
            className="rounded-full border border-gray-200 px-4 py-2 text-sm"
            key={role}
          >
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Service;
