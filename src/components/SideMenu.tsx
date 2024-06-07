import HeaderLinks from '@/components/HeaderLinks';
import LogoImage from '@/components/LogoImage';
import LogoText from '@/components/LogoText';
import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function SideMenu() {
  const [sheetOpen, setSheetOpen] = useState(false);

  function handleToggleSheet() {
    setSheetOpen((prev) => !prev);
  }

  return (
    <div className="flex items-center text-muted md:hidden">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <button onClick={handleToggleSheet}>
          <FiMenu size={36} strokeWidth={2} />
        </button>
        <SheetContent side={'top'}>
          <SheetHeader className="flex h-full flex-col">
            <div className="flex items-center gap-3">
              <LogoImage color="fill-primary" size={30} />
              <LogoText color="fill-secondary" size={10} position="vertical" />
            </div>
            <HeaderLinks
              ulClassNames="flex-1 h-full flex flex-col gap-8 py-12"
              linkClickAction={handleToggleSheet}
            />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
