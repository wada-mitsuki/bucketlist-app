'use client';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

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
import EditFormOmit from '@/components/ui-parts/form/edit-form-omit';

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
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <motion.div
          className="fixed z-50 bottom-20 right-5"
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
                 transition-colors duration-300"
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
          <DrawerDescription asChild>
            <EditFormOmit />
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
