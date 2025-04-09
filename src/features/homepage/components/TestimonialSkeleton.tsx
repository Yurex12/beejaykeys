import { Skeleton } from "@/components/ui/skeleton";

export function TestimonialSkeleton() {
  return (
    <div className="space-y-4 rounded-md border p-5">
      {/* heading */}
      <div className="flex items-center gap-x-4">
        <Skeleton className="size-10 rounded-full bg-gray-200 px-4 py-2" />
        <Skeleton className="h-4 w-20 bg-gray-200 sm:w-28" />
      </div>
      {/* content */}
      <div className="space-y-3">
        <Skeleton className="h-4 rounded-lg bg-gray-200" />
        <Skeleton className="h-4 rounded-lg bg-gray-200" />
        <Skeleton className="h-4 rounded-lg bg-gray-200" />
        <Skeleton className="h-4 rounded-lg bg-gray-200" />
      </div>
    </div>
  );
}
