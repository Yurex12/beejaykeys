import { useState } from 'react';
import Logo from './Logo';
import MenuBar from './MenuBar';
import MobileNav from './MobileNav';
import NavBar from './NavBar';

function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleOpenSheet = () => setIsSheetOpen(true);
  const handleCloseSheet = () => setIsSheetOpen(false);

  return (
    <header className='fixed top-0 mx-auto flex w-full items-center justify-between bg-white shadow-sm'>
      <div className='mx-auto flex max-w-[1440px] flex-1 items-center justify-between px-7 py-6 '>
        <Logo />
        <NavBar />
        <MobileNav
          setIsSheetOpen={setIsSheetOpen}
          isSheetOpen={isSheetOpen}
          handleCloseSheet={handleCloseSheet}
        />
        <MenuBar handleOpenSheet={handleOpenSheet} />
      </div>
    </header>
  );
}

export default Header;
