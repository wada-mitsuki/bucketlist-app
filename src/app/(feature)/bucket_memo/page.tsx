import Link from 'next/link';

import { CreateBucketMemoDrawer } from '@/app/(feature)/bucket_memo/_components/create-bucket-memo-drawer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn-ui/ui/accordion';
import { Badge } from '@/components/shadcn-ui/ui/badge';
import { Button } from '@/components/shadcn-ui/ui/button';
import { Skeleton } from '@/components/shadcn-ui/ui/skeleton';
import { FloatActionButton } from '@/components/ui-parts/float-action-button';
import { NEXT_ROUTES } from '@/constants/app-routes';
import { createBucketListMock } from '@/models/src/bucketlist/__mocks__';

export default function BucketMemo() {
  const mocklist = createBucketListMock();
  const completedListCnt = mocklist.filter((item) => item.completed).length;

  return (
    <div className="w-full">
      <div className="flex justify-between border-b p-3 font-bold items-center">
        <div className="flex items-center gap-2">
          <p className="font-bold">BucketList</p>
        </div>
        <Button className="bg-red-600 text-white p-2 rounded-lg font-bold">{`達成済み ${completedListCnt} / ${mocklist.length}`}</Button>

        {/* TODO:達成チャート */}
        {/* <CreateBucketMemoDrawer
          drawerTrigger={
            <Button className="bg-red-600 text-white p-2 rounded-lg font-bold">{`達成済み ${completedListCnt} / ${mocklist.length}`}</Button>
          }
        >
          <div className="items-center">
            <CompletedChart userBucketList={mocklist} />
          </div>
        </CreateBucketMemoDrawer> */}
      </div>

      <div>
        {mocklist.map((list, index) => (
          <Accordion
            type="single"
            collapsible
            className="w-full"
            key={list.id}
            defaultValue="item-0"
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="p-3">
                <div className="flex gap-2 items-center">
                  <p className="text-gray-600 font-bold">No.{index + 1}</p>
                  <p className="text-gray-600 font-bold text-left">
                    {list.title}
                  </p>
                  {list.completed && (
                    <Badge className="min-w-max bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
                      達成
                    </Badge>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-3 pt-0">
                <div className="mb-3">
                  <div className="flex items-center justify-start mb-1">
                    <p className="text-gray-600 text-sm">日程：</p>
                    <p className="text-sm">2022/01/01 予定</p>
                  </div>
                  <div className="flex items-center justify-start">
                    <p className="text-gray-600 text-sm">場所：</p>
                    <p className="text-sm">沖縄県那覇市小禄</p>
                  </div>
                  <div className="flex items-center justify-start">
                    <p className="text-gray-600 text-sm">予算：</p>
                    <p className="text-sm">2000円</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mb-3">
                  <Skeleton className="w-full h-32" />

                  <p>{list.content}</p>
                </div>

                <div className="flex justify-evenly gap-2">
                  <Button className="ml-auto h-7 w-full bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 text-white font-bold hover:from-purple-400 hover:via-pink-400 hover:to-red-400 shadow-lg transform transition-transform hover:scale-105">
                    達成！
                  </Button>
                  <Link
                    href={NEXT_ROUTES.BUCKET_MEMO_EDIT}
                    className="w-full ml-auto"
                  >
                    <Button className="h-7 w-full bg-primary">編集</Button>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <CreateBucketMemoDrawer />
    </div>
  );
}
