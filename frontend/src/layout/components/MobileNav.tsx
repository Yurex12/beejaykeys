import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import { links } from "../constants";
import AdminButton from "./AdminButton";

type MobileNavProps = {
  setIsSheetOpen: (val: boolean) => void;
  handleCloseSheet: VoidFunction;
  isSheetOpen: boolean;
};

function MobileNav({
  setIsSheetOpen,
  isSheetOpen,
  handleCloseSheet,
}: MobileNavProps) {
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTitle className="sr-only">Navbar</SheetTitle>
      <SheetDescription className="sr-only">A mobile navbar</SheetDescription>
      <SheetContent className="sheet-content m-0 w-[250px] border-0 p-0">
        <div>
          <ul className="mt-5">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  onClick={handleCloseSheet}
                  to={`/${link.href}`}
                  className={`block w-full py-1`}
                >
                  <span className="block rounded-lg border-l-4 border-l-white py-3 pl-3">
                    {link.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center md:hidden">
            <AdminButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
