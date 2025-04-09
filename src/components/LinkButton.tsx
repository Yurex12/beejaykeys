import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type LinkButtonProps = {
  name: string;
  to: string;
  className?: string;
};

export default function LinkButton({ to, name, className }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={cn(
        "mx-auto block w-44 rounded-lg bg-green-600 py-3 text-center text-sm text-white hover:bg-green-700",
        className,
      )}
    >
      {name}
    </Link>
  );
}
