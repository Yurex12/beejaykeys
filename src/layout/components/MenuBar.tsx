import { HiMenu } from "react-icons/hi";
import AdminButton from "./AdminButton";

function MenuBar({ handleOpenSheet }: { handleOpenSheet: VoidFunction }) {
  return (
    <div className="flex items-center space-x-5 text-2xl hover:cursor-pointer md:space-x-10">
      <div className="hidden md:block">
        <AdminButton />
      </div>

      <HiMenu className="text-gray-600 lg:hidden" onClick={handleOpenSheet} />
    </div>
  );
}

export default MenuBar;
