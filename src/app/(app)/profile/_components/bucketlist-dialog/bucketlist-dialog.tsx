import { Badge } from '@/components/shadcn-ui/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn-ui/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/shadcn-ui/ui/dialog';
import { ScrollArea, ScrollBar } from '@/components/shadcn-ui/ui/scroll-area';
import { Skeleton } from '@/components/shadcn-ui/ui/skeleton';
import { AchieveBadge } from '@/components/ui-parts';
import { BucketListItem } from '@/models/src';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Suspense } from 'react';

interface Props {
  bucketList: BucketListItem;
  onClose: () => void;
}

export const BucketlistDialog = ({ bucketList, onClose }: Props) => {
  return (
    <Dialog open={!!bucketList} onOpenChange={() => onClose()}>
      <DialogContent className="w-[350px] p-6 bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            {bucketList.title}
          </DialogTitle>
        </DialogHeader>
        <div>
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
        </div>

        <div> {bucketList.content}</div>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-3">
            {bucketList.completed && <AchieveBadge />}
            <Badge variant="outline">日程:2022/01/01</Badge>
            <Badge variant="outline">場所:沖縄県那覇市小禄</Badge>
            <Badge variant="outline">予算:2022/01/01</Badge>
            <Badge variant="outline">予算:2022/01/01</Badge>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
