import { LucideArchive } from "lucide-react";

function NoData({ content }: { content?: string }) {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center p-4">
      <div className="max-w-md text-center">
        <LucideArchive className="mx-auto" size={50} />

        <h2 className="mt-4 text-2xl font-bold text-gray-700">No Data Found</h2>
        <p className="mt-2 text-base text-gray-500">
          {content
            ? content
            : "Hey Admin, there’s no data available at the moment. Please add new data to get started and have your content displayed here."}
        </p>
      </div>
    </div>
  );
}

export default NoData;
