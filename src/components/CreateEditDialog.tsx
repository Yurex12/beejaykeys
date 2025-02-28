import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

function CreateEditDialog({
  children,
  open,
  onOpenChange,
  className,
}: {
  children: ReactNode;
  open: boolean;
  onOpenChange: (value: boolean) => void;
  className?: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`max-w-xs rounded-md border-0 sm:max-w-lg lg:max-w-2xl ${className}`}
      >
        <DialogHeader>
          <DialogTitle className="sr-only">Form</DialogTitle>
          <DialogDescription className="sr-only">
            Make changes to the form. Click save when you're done.
          </DialogDescription>

          <div>{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CreateEditDialog;
