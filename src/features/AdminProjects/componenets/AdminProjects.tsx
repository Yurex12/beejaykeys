import { Button } from "@/components/ui/button";
import { Project } from "../types";
import { FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminProjects({
  name,
  image,
  _id: projectId,
  status,
  handleDelete,
}: Project & { handleDelete: (projectId: string) => void }) {
  return (
    <div className="space-y-3 rounded-md border border-gray-200 p-5">
      <div className="relative size-60">
        <img
          src={image}
          alt={name}
          className="size-60 rounded-md object-cover"
        />

        {status === "in-progress" ? (
          <i className="absolute right-4 top-4 rounded-full bg-yellow-100 p-2 text-sm">
            <FaHourglassHalf className="text-yellow-400" />
          </i>
        ) : (
          <i className="absolute right-4 top-4 rounded-full bg-green-100 p-2 text-sm">
            <FaCheckCircle className="text-green-500" />
          </i>
        )}
      </div>
      <p className="font-bold text-gray-700">{name}</p>
      <div className="flex gap-5">
        <Link
          to={`/dashboard/projects/form?projectId=${projectId}`}
          className="w-1/2 rounded-md bg-green-400 py-2 text-center text-sm text-white hover:bg-green-500"
        >
          Edit
        </Link>
        <Button
          className="h-0 w-1/2 py-4 text-sm"
          variant="outline"
          onClick={() => handleDelete(projectId)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default AdminProjects;
