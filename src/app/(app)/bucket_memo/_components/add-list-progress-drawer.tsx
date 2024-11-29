'use client';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { InferOutput } from 'valibot';

import { useAddListProgressDrawer } from '@/app/(app)/bucket_memo/_components/_hooks/use-add-list-progress-drawer';
import { useBucketlistCreateForm } from '@/app/(app)/bucket_memo/_components/_hooks/use-bucketlist-create-form';
import BucketlistCreateForm from '@/app/(app)/bucket_memo/_components/bucketlist-create-form';
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
import { bucketListFormSchema } from '@/models/src/bucketlist/schema/bucket-list-form-schema';

interface CreateBucketMemoDrawer {
  drawerTrigger?: React.ReactNode;
  openContents?: React.ReactNode;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const AddListProgressDrawer = ({
  drawerTrigger,
  header,
  children,
  footer,
}: CreateBucketMemoDrawer) => {
  const { form, onSubmit, isOpen, onOpenChange } = useAddListProgressDrawer();

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button className="h-7 w-full" variant={'secondary'}>
          進捗を追加
        </Button>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="max-w-screen-md m-auto"
      >
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex justify-between items-center">
              <DrawerClose className="items-start">
                <div className="text-sm text-gray-500">キャンセル</div>
              </DrawerClose>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                リストに追加
              </div>
              <Button
                variant={'link'}
                className="text-sm text-primary"
                onClick={form.handleSubmit(onSubmit)}
              >
                追加
              </Button>
            </div>
          </DrawerTitle>
          <DrawerDescription asChild>
            <BucketlistCreateForm form={form} />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
            追加する
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">キャンセル</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
