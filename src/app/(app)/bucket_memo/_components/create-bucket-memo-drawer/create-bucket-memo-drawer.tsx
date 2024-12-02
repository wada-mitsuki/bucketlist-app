'use client';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

import BucketlistCreateForm from '@/app/(app)/bucket_memo/_components/bucketlist-create-form/bucketlist-create-form';
import { useBucketlistCreateForm } from '@/app/(app)/bucket_memo/_components/bucketlist-create-form/hooks/use-bucketlist-create-form';
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

export const CreateBucketMemoDrawer = () => {
  const { form, onSubmit, isOpen, onOpenChange } = useBucketlistCreateForm();

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <motion.div
          className="fixed z-49 bottom-20 right-5"
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          whileTap={{ scale: 0.6, rotate: -90, borderRadius: '100%' }}
        >
          <Button
            className=" w-16 h-16 
                 bg-primary text-white rounded-full shadow-lg 
                 flex items-center justify-center 
                 hover:bg-blue-600 
                 transition-colors duration-300 z-49"
          >
            <Plus className="w-8 h-8" />
          </Button>
        </motion.div>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="max-w-screen-md m-auto"
      >
        <DrawerHeader>
          <DrawerTitle asChild>
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
