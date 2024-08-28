import { PartyPopper, Sparkles } from 'lucide-react';
import Image from 'next/image';

import { AspectRatio } from '@/components/shadcn-ui/ui/aspect-ratio';
import { Badge } from '@/components/shadcn-ui/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn-ui/ui/carousel';
import { Skeleton } from '@/components/shadcn-ui/ui/skeleton';
import { Avatar } from '@/components/ui-parts/avatar';

interface BucketlistListItemProps {
  avatar: string;
  displayName: string;
  username: string;
  timestamp: string;
  content: string;
  image?: string; // 投稿に画像が含まれる場合
}

export const BucketlistListItem = () => {
  return (
    <div className="flex flex-col border-gray-200 max-w-2xl m-auto border-b gap-2 py-3">
      {/* アバター */}
      <div className="flex px-2">
        <div className="mr-3">
          <Avatar image={'https://github.com/shadcn.png'} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">わっち</span>
            <span className="text-gray-500">@wacci</span>
            <span className="text-gray-500">2222/22/22</span>
            <Badge className="bg-red-700 text-white">達成</Badge>
          </div>
        </div>
      </div>

      <div>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <AspectRatio ratio={16 / 9}>
                <Skeleton className="w-full h-full" />
              </AspectRatio>
            </CarouselItem>
            <CarouselItem>
              <AspectRatio ratio={16 / 9}>
                <Skeleton className="w-full h-full" />
              </AspectRatio>
            </CarouselItem>
            <CarouselItem>
              <AspectRatio ratio={16 / 9}>
                <Skeleton className="w-full h-full" />
              </AspectRatio>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* インタラクションボタン */}
      <div className="px-2 flex gap-4 justify-start text-gray-500">
        <button className="flex items-center space-x-1 hover:text-red-500">
          <Sparkles className="w-5 h-5" />
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <PartyPopper className="w-5 h-5" />
        </button>
      </div>

      <div className="px-2">
        <p className=" text-gray-800 text-sm">
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    </div>
  );
};
