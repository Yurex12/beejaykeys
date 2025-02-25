import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

type AdminContentHeaderProps = {
  title: string;
  onClick?: () => void;
};

function AdminContentHeader({ title, onClick }: AdminContentHeaderProps) {
  return (
    <section>
      <div className="mx-auto mt-28 px-8 md:px-14">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl lg:text-4xl xl:text-5xl">
            {title}
          </h1>
          {onClick && (
            <Button
              className="flex h-0 items-center gap-x-1 bg-green-400 py-4 hover:bg-green-500"
              onClick={onClick}
            >
              <PlusIcon /> <span className="text-sm">New</span>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default AdminContentHeader;
