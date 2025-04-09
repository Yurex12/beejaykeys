import { Skeleton } from "@/components/ui/skeleton";

export default function BrandServicesSkeleton() {
  return (
    <>
      {[1, 2, 3].map((_, i) => {
        return (
          <div
            className="flex flex-col gap-y-4 rounded-md border border-gray-200 p-5"
            key={i}
          >
            <Skeleton className="size-12 rounded-full bg-gray-200" />
            <Skeleton className="h-6 w-40 rounded-lg bg-gray-200 text-xl font-extrabold" />
            <Skeleton className="h-4 rounded-lg bg-gray-200" />
            <Skeleton className="h-4 rounded-lg bg-gray-200" />
            <Skeleton className="h-4 rounded-lg bg-gray-200" />
            <ul className="flex flex-1 flex-wrap gap-x-2 gap-y-4">
              {[1, 2, 3].map((i) => (
                <Skeleton
                  className="h-8 w-40 rounded-full bg-gray-200"
                  key={i}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
