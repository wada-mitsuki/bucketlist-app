'use client';
import Link from 'next/link';

import { CompletedChartDrawer } from '@/app/(app)/bucket_memo/_components';
import { AddListProgressDrawer } from '@/app/(app)/bucket_memo/_components/add-list-progress-drawer';
import { CreateBucketMemoDrawer } from '@/app/(app)/bucket_memo/_components/create-bucket-memo-drawer';
import { useBucketMemo } from '@/app/(app)/bucket_memo/_hooks/use-bucket-memo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn-ui/ui/accordion';
import { Badge } from '@/components/shadcn-ui/ui/badge';
import { Button } from '@/components/shadcn-ui/ui/button';
import { Skeleton } from '@/components/shadcn-ui/ui/skeleton';
import { AchieveButton } from '@/components/ui-parts/achieve-button/achieve-button';
import { BG_MAIN_STYLE } from '@/config/bg-main-style';
import { APP_ROUTES } from '@/constants/app-routes';
import { createBucketListMock } from '@/models/src/bucketlist/__mocks__';

export default function BucketMemo() {
  const mocklist = createBucketListMock();
  const { handleClick, showOverlay } = useBucketMemo();

  return (
    <div className="w-full">
      <div className="flex justify-between border-b p-3 font-bold items-center">
        <div className="flex items-center gap-2">
          <p className="font-bold">BucketList</p>
        </div>
        <CompletedChartDrawer list={mocklist} />
      </div>

      <div>
        {mocklist.map((list, index) => (
          <Accordion type="single" collapsible className="w-full" key={list.id}>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="p-3">
                <div className="flex gap-2 items-center pr-2">
                  <p className="text-gray-600 font-bold">No.{index + 1}</p>
                  <p className="text-gray-600 font-bold text-left">
                    {list.title}
                  </p>
                  {list.completed && (
                    <Badge
                      className={`min-w-max bg-gradient-to-r ${BG_MAIN_STYLE}`}
                    >
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
                  <AchieveButton disabled={list.completed} />

                  <AddListProgressDrawer />

                  <Button className="h-7 w-full bg-primary" asChild>
                    <Link
                      href={`${APP_ROUTES.BUCKET_MEMO}/${list.id}`}
                      className="w-full ml-auto"
                      scroll={false}
                    >
                      内容を編集
                    </Link>
                  </Button>
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
