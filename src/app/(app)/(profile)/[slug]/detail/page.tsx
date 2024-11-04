import { AspectRatio } from '@radix-ui/react-aspect-ratio';

import { Badge } from '@/components/shadcn-ui/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn-ui/ui/carousel';
import { Skeleton } from '@/components/shadcn-ui/ui/skeleton';
import { AchieveBadge, HeaderWithBackButton } from '@/components/ui-parts';
import { APP_ROUTES } from '@/constants/app-routes';
import { createBucketlistitemMock } from '@/models/src/bucketlist/__mocks__';

// interface Props {
//   selectedItem: BucketListItem;
// }

export default function UserProfile() {
  const selectedItem = createBucketlistitemMock();

  return (
    <>
      <HeaderWithBackButton pageTitle="詳細" link={{ href: APP_ROUTES.USER }} />
      <div className="flex-1 overflow-y-auto">
        <div>
          <div className="p-2">
            <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
            <p className="text-lg text-muted-foreground">
              {selectedItem.content}
            </p>
          </div>
          {selectedItem.images && (
            <div>
              <Carousel>
                <CarouselContent>
                  {selectedItem.images.map((item) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <CarouselItem>
                        <AspectRatio ratio={16 / 9}>
                          <Skeleton className="w-full h-full" />
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
          <div className="flex flex-wrap gap-3 p-2">
            <AchieveBadge />
            <Badge variant="secondary" className=" py-1 px-3">
              予算: 11000円
            </Badge>
            <Badge variant="secondary" className="py-1 px-3">
              目標日: 11111
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
}
