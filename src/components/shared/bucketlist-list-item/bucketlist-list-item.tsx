'use client';
import { PartyPopper, Sparkles } from 'lucide-react';

import { AspectRatio } from '@/components/shadcn-ui/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn-ui/ui/carousel';
import { Label } from '@/components/shadcn-ui/ui/label';
import { Skeleton } from '@/components/shadcn-ui/ui/skeleton';
import { AchieveBadge } from '@/components/ui-parts';
import { Avatar } from '@/components/ui-parts/avatar';
import { BucketListItem } from '@/models/src';
import { Suspense, useCallback, useState } from 'react';
import Image from 'next/image';

interface BucketlistListItemProps {
  bucketList: BucketListItem;
}

export const BucketlistListItem = ({ bucketList }: BucketlistListItemProps) => {
  const image = Array.from({ length: 3 }).map((_, index) => (
    <Skeleton key={index} className="w-full h-full" />
  ));

  const [on, setOn] = useState(false);
  const handleClick = useCallback(() => {
    setOn((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col border-gray-200 max-w-2xl m-auto border-b gap-2 py-3">
      {/* アバター */}
      <div className="flex px-2 gap-2 items-center">
        <Avatar image={'https://github.com/shadcn.png'} />
        <p className="font-bold text-gray-900">{bucketList.title}</p>
      </div>

      <div className="flex items-center gap-2 px-2">
        {bucketList.completed && <AchieveBadge />}
        <Label className="text-gray-900 px-2">{bucketList.title}</Label>
      </div>

      {bucketList.images && (
        <div>
          <Carousel>
            <CarouselContent>
              {bucketList.images.map((item) => {
                return (
                  <CarouselItem key={item}>
                    <AspectRatio ratio={16 / 9}>
                      <Suspense
                        fallback={<Skeleton className="w-full h-full" />}
                      >
                        <Skeleton className="w-full h-full" />
                        {/* <image
                          href={'https://github.com/shadcn.png'}
                          width={500}
                          height={500}
                        /> */}
                      </Suspense>
                    </AspectRatio>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}

      {/* インタラクションボタン */}
      <div className="px-2 flex gap-4 justify-start text-gray-500">
        <button className="flex items-center space-x-1 hover:text-red-500">
          <span className="likeButton">♥</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-red-500">
          <Sparkles className="w-5 h-5" />
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <PartyPopper className="w-5 h-5" />
        </button>
      </div>

      <div className="px-2">
        <span className="text-sm text-gray-500">{bucketList.created}</span>
        <p className=" text-gray-800 text-sm">{bucketList.content}</p>
      </div>
    </div>
  );
};
