import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/home"
      className={cn(
        "text-primary flex items-center gap-2 font-semibold",
        className,
      )}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500 text-sm font-bold text-white">
        B
      </span>

      <span className="text-lg tracking-tight">BEEJAYKEYS</span>
    </Link>
  );
}

export default Logo;
