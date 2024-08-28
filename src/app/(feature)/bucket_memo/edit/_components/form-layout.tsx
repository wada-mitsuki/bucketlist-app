'use client';
import { Button } from '@/components/shadcn-ui/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/shadcn-ui/ui/drawer';
import { FloatActionButton } from '@/components/ui-parts/float-action-button';

interface CreateBucketMemoDrawer {
  labelText: string;
  children: React.ReactNode;
}

export const FormLayout = ({ labelText, children }: CreateBucketMemoDrawer) => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <div className="flex items-center justify-start border-b py-2">
      <label
        htmlFor="title"
        className="w-36 block text-sm font-medium text-gray-700 text-left"
      >
        {labelText}
      </label>
      {children}
    </div>
  );
};
