import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Dispatch, ReactNode, SetStateAction } from "react";

function CreateEditDialog({
  children,
  title,
  open,
  onOpenChange,
}: {
  children: ReactNode;
  title: string;
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="py-6">
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-600">{title}</DialogTitle>
          <DialogDescription className="sr-only">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>

          <div>{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CreateEditDialog;
