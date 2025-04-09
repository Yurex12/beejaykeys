import { Link } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
import { HiMenu } from "react-icons/hi";
import { HiMiniHome } from "react-icons/hi2";
import Logo from "./Logo";

export default function AdminHeader() {
  const { toggleSidebar } = useSidebar();
  return (
    <header className="fixed top-0 z-50 mx-auto flex w-full items-center justify-between bg-white shadow-sm">
      <div className="mx-auto flex flex-1 items-center justify-between px-4 py-5 md:px-10">
        <div className="flex items-center gap-x-5">
          <button onClick={toggleSidebar}>
            <HiMenu className="text-3xl" />
          </button>

          <Logo />
        </div>

        <Link
          to="/home"
          className="flex items-center justify-center gap-x-2 rounded-lg border border-gray-600 px-4 py-2 text-sm text-gray-600"
        >
          <HiMiniHome />
          <span>Home</span>
        </Link>
      </div>
    </header>
  );
}
