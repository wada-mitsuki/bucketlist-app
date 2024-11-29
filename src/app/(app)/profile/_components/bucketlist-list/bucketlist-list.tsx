'use client';
import { BucketlistDialog } from '@/app/(app)/profile/_components/bucketlist-dialog/bucketlist-dialog';
import { useBucketlistList } from '@/app/(app)/profile/_components/bucketlist-list/hooks/use-bucketlist-list';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/shadcn-ui/ui/card';
import { ScrollArea } from '@/components/shadcn-ui/ui/scroll-area';
import { Skeleton } from '@/components/shadcn-ui/ui/skeleton';
import { AchieveBadge } from '@/components/ui-parts';
import { BucketListItem } from '@/models/src';

interface Props {
  bucketList: BucketListItem[]; // Define your props here
}

export const BucketlistList = ({ bucketList }: Props) => {
  const { selectedList, handleClick, handleCloseClick } = useBucketlistList();

  return (
    <>
      <ScrollArea className="h-full p-2">
        <div className="grid grid-cols-2 gap-4">
          {bucketList.map((item) => (
            <Card
              key={item.id}
              className="shadow-md h-88 flex flex-col justify-between"
              onClick={() => handleClick(item)}
            >
              <div>
                <CardHeader className="p-2">
                  <Skeleton className="w-full h-28 rounded-xl backdrop-blur" />
                </CardHeader>
                <CardContent className="text-sm p-3">
                  <p className="font-bold text-sm">{item.title}</p>
                </CardContent>
              </div>
              <CardFooter className="p-2">
                {item.completed && <AchieveBadge />}
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {selectedList && (
        <BucketlistDialog
          bucketList={selectedList}
          onClose={handleCloseClick}
        />
      )}
    </>
  );
};
