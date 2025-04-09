import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { HiEllipsisVertical } from "react-icons/hi2";
import { useProjects } from "../hooks/useProjects";

import SortByOperation from "./SortByOperation";
import FilterOperation from "@/components/FilterOperation";

export default function AdminOperations({
  display,
  handleDisplay,
}: {
  display: string;
  handleDisplay: (value: string) => void;
}) {
  const { projects, error, isLoading } = useProjects();

  if (isLoading) return <p>Loading....</p>;

  if (error) return null;

  if (!projects?.length) return null;

  return (
    <section>
      <div className="mx-auto px-6 pt-10 md:px-11 md:pt-5">
        <div className="flex flex-col gap-y-5 md:flex-row md:justify-end md:gap-x-7">
          <SortByOperation />
          <div className="flex w-full md:w-fit">
            <FilterOperation
              options={[
                { value: "all", label: "All" },
                { value: "in-progress", label: "In progress" },
                { value: "done", label: "Done" },
              ]}
              filterField="status"
            />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <HiEllipsisVertical className="text-3xl" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => handleDisplay("list")}
                  className={display === "list" ? "bg-green-50" : ""}
                >
                  List
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={display === "grid" ? "bg-green-50" : ""}
                  onClick={() => handleDisplay("grid")}
                >
                  Grid
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
}
