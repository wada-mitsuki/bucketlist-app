'use client';
import { Menu as MenuIcon, Settings } from 'lucide-react';

import { useHeaderScroll } from '@/components/core/header/hooks/useHeaderScroll';
import { Sidebar } from '@/components/core/sidebar/sidebar';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/shadcn-ui/ui/sheet';

interface SidebarProps {
  className?: string;
  playlists?: string[];
}

export const HeaderMenu = ({ className, playlists }: SidebarProps) => {
  const { isVisible } = useHeaderScroll();

  return (
    <div
      className={`z-0 fixed top-0 left-0 w-full bg-white border-b p-3 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <Sheet>
        <div className="flex w-full justify-between items-center">
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <div className="flex gap-2 items-center">
            <Settings />
          </div>
        </div>

        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetDescription>
              <Sidebar />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
