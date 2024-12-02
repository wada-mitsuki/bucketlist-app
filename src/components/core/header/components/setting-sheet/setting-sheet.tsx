import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Menu as MenuIcon, Settings } from 'lucide-react';

import { SettingSheetContainer } from '@/components/core/header/components/setting-sheet/container/setting-sheet-container';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/shadcn-ui/ui/sheet';

export const SettingSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Settings />
      </SheetTrigger>

      <SheetContent side={'right'} aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle>設定</SheetTitle>
          <SheetDescription asChild>
            <SettingSheetContainer />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
