'use client';
import Link from 'next/link';

import { AddListProgressDrawer } from '@/app/(app)/bucket_memo/_components/add-list-progress-drawer/add-list-progress-drawer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn-ui/ui/accordion';
import { Badge } from '@/components/shadcn-ui/ui/badge';
import { Button } from '@/components/shadcn-ui/ui/button';
import { ScrollArea, ScrollBar } from '@/components/shadcn-ui/ui/scroll-area';
import { Skeleton } from '@/components/shadcn-ui/ui/skeleton';
import { AchieveBadge } from '@/components/ui-parts';
import { AchieveButton } from '@/components/ui-parts/achieve-button/achieve-button';
import { BG_MAIN_STYLE } from '@/config/bg-main-style';
import { APP_ROUTES } from '@/constants/app-routes';
import { BucketListItem } from '@/models/src';

interface BucketlistAccordionProps {
  bucketlist: BucketListItem[];
}

export const BucketlistAccordion = ({
  bucketlist,
}: BucketlistAccordionProps) => {
  return (
    <>
      {bucketlist.map((list, index) => (
        <Accordion type="single" collapsible className="w-full" key={list.id}>
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="p-3">
              <div className="flex gap-2 items-center pr-2">
                <p className="text-gray-600 font-bold">No.{index + 1}</p>
                <p className="text-gray-600 font-bold text-left">
                  {list.title}
                </p>
                {list.completed && <AchieveBadge />}
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-3 pt-0">
              <div className="flex flex-col gap-3 mb-3">
                <Skeleton className="w-full h-32" />
                <p>{list.content}</p>

                <ScrollArea className="w-full whitespace-nowrap">
                  <div className="flex gap-3">
                    <Badge variant="outline">日程:2022/01/01</Badge>
                    <Badge variant="outline">場所:沖縄県那覇市小禄</Badge>
                    <Badge variant="outline">予算:2022/01/01</Badge>
                    <Badge variant="outline">予算:2022/01/01</Badge>
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>

              <div className="flex justify-evenly gap-2">
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
    </>
  );
};
