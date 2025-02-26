import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import SpinnerMini from "./SpinnerMini";

type ConfirmDeleteProps = {
  resourceName: string;
  disabled?: boolean;
  onConfirm: () => void;
  handleOpen: (value: boolean) => void;
  open: boolean;
};

export function ConfirmDelete({
  resourceName,
  disabled,
  onConfirm,
  handleOpen,
  open,
}: ConfirmDeleteProps) {
  return (
    <AlertDialog key={resourceName} open={open} onOpenChange={handleOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {resourceName}</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this {resourceName} permanently?
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            onClick={() => handleOpen(false)}
            className="focus:outline-none focus:ring-0 active:outline-none active:ring-0"
            disabled={disabled}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            disabled={disabled}
            onClick={onConfirm}
            className="w-20 bg-red-500 hover:bg-red-600"
          >
            {disabled ? <SpinnerMini /> : "Delete"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
