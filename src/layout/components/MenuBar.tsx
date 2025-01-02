import { Button } from "@/components/ui/button";
import { HiMenu } from "react-icons/hi";
import { HiUser } from "react-icons/hi2";

function MenuBar({ handleOpenSheet }: { handleOpenSheet: () => void }) {
  return (
    <div className="flex items-center space-x-5 text-2xl hover:cursor-pointer md:space-x-10">
      <HiUser />

      <div className="hidden md:block">
        <Button className="bg-green-600 px-6 text-sm font-medium text-white hover:bg-green-700">
          Login
        </Button>
      </div>

      <HiMenu className="text-gray-600 lg:hidden" onClick={handleOpenSheet} />
    </div>
  );
}

export default MenuBar;
