import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import AdminButton from "./AdminButton";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import NavBar from "./NavBar";

function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleOpenSheet = () => setIsSheetOpen(true);
  const handleCloseSheet = () => setIsSheetOpen(false);

  return (
    <header className="fixed top-0 z-50 mx-auto flex w-full items-center justify-between bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1440px] flex-1 items-center justify-between px-7 py-6">
        <Logo />
        <NavBar />
        <MobileNav
          setIsSheetOpen={setIsSheetOpen}
          isSheetOpen={isSheetOpen}
          handleCloseSheet={handleCloseSheet}
        />
        <AdminButton />
        <HiMenu
          className="text-3xl text-gray-600 lg:hidden"
          onClick={handleOpenSheet}
        />
      </div>
    </header>
  );
}

export default Header;
