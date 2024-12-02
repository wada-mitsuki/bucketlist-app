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
import { CompletedChart } from '@/components/ui-parts';
import { BG_MAIN_STYLE } from '@/config/bg-main-style';
import { BucketListItem } from '@/models/src';

interface CreateBucketMemoDrawer {
  list: BucketListItem[];
}

export const CompletedChartDrawer = ({ list }: CreateBucketMemoDrawer) => {
  const completedListCnt = list.filter((item) => item.completed).length;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div>
          <Button
            className={`${BG_MAIN_STYLE} text-white p-2 rounded-lg font-bold`}
          >{`達成済み ${completedListCnt} / ${list.length}`}</Button>
        </div>
      </DrawerTrigger>
      <DrawerContent aria-describedby={undefined}>
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex justify-between items-center">
              <DrawerClose className="items-start">
                <div className="text-sm text-gray-500">キャンセル</div>
              </DrawerClose>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                達成度
              </div>
            </div>
          </DrawerTitle>
          <DrawerDescription asChild>
            <CompletedChart userBucketList={list} />
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};
