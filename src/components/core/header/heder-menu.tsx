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
import { SettingSheet } from '@/components/shared';

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
      <div className="flex w-full justify-end items-center">
        {/* TODO:今いらない */}
        {/* <MenuIcon /> */}
        <div className="flex gap-2 items-center">
          <SettingSheet />
        </div>
      </div>
    </div>
  );
};
