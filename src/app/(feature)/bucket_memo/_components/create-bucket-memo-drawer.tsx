'use client';
import { Input } from 'postcss';
import { title } from 'process';

import { FormLayout } from '@/app/(feature)/bucket_memo/edit/_components/form-layout';
import EditForm from '@/app/(feature)/bucket_memo/edit/page';
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
  drawerTrigger?: React.ReactNode;
  openContents?: React.ReactNode;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const CreateBucketMemoDrawer = ({
  drawerTrigger,
  header,
  children,
  footer,
}: CreateBucketMemoDrawer) => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {/* <FloatActionButton /> */}
        <Button className="w-full">追加する</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex justify-between items-center">
              <DrawerClose className="items-start">
                <div className="text-sm text-gray-500">キャンセル</div>
              </DrawerClose>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                追加
              </div>
              <div className="text-sm text-primary">保存</div>
            </div>
          </DrawerTitle>
          <DrawerDescription>
            <EditForm />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="w-full">保存する</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              キャンセル
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
