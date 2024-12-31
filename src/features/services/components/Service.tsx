import { Button } from "@/components/ui/button";
import { Service as ServiceType } from "../types";
import { HiPencil, HiTrash } from "react-icons/hi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

function Service({
  title,
  description,
  imageUrl,
  isAuthenticated,
}: ServiceType & { isAuthenticated: boolean }) {
  return (
    <div className="flex flex-col rounded-md border border-gray-800 p-3 shadow-sm">
      <div className={`space-y-4 ${isAuthenticated ? "mb-6" : ""}`}>
        {/* icon */}
        <div className="text-5xl text-gray-800">{imageUrl}</div>
        {/* title */}
        <h1 className="text-xl font-extrabold text-gray-800">{title}</h1>
        {/* description */}
        <p>{description}</p>
      </div>

      {/* for admin */}
      {isAuthenticated && (
        <div className="mt-auto flex justify-between">
          {/* Edit */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button
                  variant="outline"
                  className="border-green-500"
                  size="icon"
                >
                  <HiPencil
                    className="text-green-500"
                    style={{ height: "20px", width: "20px" }}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="mb-2">Edit</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* delete */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button
                  variant="outline"
                  className="border-red-400"
                  size="icon"
                >
                  <HiTrash
                    className="text-red-400"
                    style={{ height: "20px", width: "20px" }}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="mb-2">Delete</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </div>
  );
}

export default Service;
