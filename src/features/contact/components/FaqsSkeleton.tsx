import { Skeleton } from "@/components/ui/skeleton";

function FaqsSkeleton() {
  return (
    <div className="mx-auto mt-2 max-w-3xl space-y-4 rounded-md border p-4 shadow-sm">
      <Skeleton className="h-8 w-full rounded-lg bg-gray-200" />
      <Skeleton className="h-8 w-full rounded-lg bg-gray-200" />
      <Skeleton className="h-8 w-full rounded-lg bg-gray-200" />
    </div>
  );
}

export default FaqsSkeleton;
