import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
// import { HiLogout } from 'react-icons/hi';
import { links } from '../constants';
import { NavLink } from 'react-router-dom';

type MobileNavProps = {
  setIsSheetOpen: (val: boolean) => void;
  handleCloseSheet: () => void;
  isSheetOpen: boolean;
};

function MobileNav({
  setIsSheetOpen,
  isSheetOpen,
  handleCloseSheet,
}: MobileNavProps) {
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetContent className='w-[250px] p-0 m-0 sheet-content border-0'>
        <ul className='h-[80dvh] mt-5'>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                onClick={handleCloseSheet}
                to={`/${link.id}`}
                className={`block w-full py-1`}
              >
                <span className='block rounded-lg pl-3 border-l-4 border-l-white py-3'>
                  {link.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* logout button */}
        <div>
          <Button className='mx-auto flex w-7/12 items-center justify-center space-x-3 rounded-lg border-2 p-1 bg-green-600 hover:bg-green-700 outline-none focus:outline-none focus:ring-0 border-none focus-visible:ring-0'>
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
