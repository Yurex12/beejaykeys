import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

function AddButton({ onClick }: { onClick: VoidFunction }) {
  return (
    <Button
      className="flex h-0 items-center gap-x-1 bg-green-400 py-4 hover:bg-green-500"
      onClick={onClick}
    >
      <PlusIcon /> <span className="text-sm">New</span>
    </Button>
  );
}

export default AddButton;
