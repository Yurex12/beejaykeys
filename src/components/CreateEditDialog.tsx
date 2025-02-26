import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

function CreateEditDialog({
  children,
  open,
  onOpenChange,
}: {
  children: ReactNode;
  open: boolean;
  onOpenChange: (value: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="py-6">
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
