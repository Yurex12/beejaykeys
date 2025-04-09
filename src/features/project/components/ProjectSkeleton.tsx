import { Skeleton } from "@/components/ui/skeleton";
import { HiArrowCircleRight } from "react-icons/hi";

export function ProjectSkeleton() {
  return (
    <div className="flex flex-col gap-y-4 rounded-md">
      <Skeleton className="h-[26rem] w-full rounded-md bg-gray-200" />
      <Skeleton className="h-6 w-40 rounded-lg bg-gray-200 text-xl font-extrabold" />
      <Skeleton className="h-4 rounded-lg bg-gray-200" />
      <Skeleton className="h-4 rounded-lg bg-gray-200" />
      <div className="flex flex-1 items-start gap-x-2">
        <ul className="flex flex-1 flex-wrap gap-x-2 gap-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton className="h-8 w-40 rounded-full bg-gray-200" key={i} />
          ))}
        </ul>

        <HiArrowCircleRight className="text-2xl text-gray-200 md:text-3xl" />
      </div>
    </div>
  );
}
