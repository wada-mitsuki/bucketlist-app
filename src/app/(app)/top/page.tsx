import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/shadcn-ui/ui/tabs';
import { BucketlistListItem } from '@/components/shared';
import { createBucketListMock } from '@/models/src/bucketlist/__mocks__';

interface DocsLayoutProps {
  children?: React.ReactNode;
}

export default function BucketList({ children }: DocsLayoutProps) {
  const mocklist = createBucketListMock();

  return (
    <div className="">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="done">Done</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {mocklist.map((item) => {
            return (
              <div key={item.id}>
                <BucketlistListItem bucketList={item} />
              </div>
            );
          })}
        </TabsContent>
        <TabsContent value="done">
          {mocklist
            .filter((item) => item.completed)
            .map((item) => {
              return (
                <div key={item.id}>
                  <BucketlistListItem bucketList={item} />
                </div>
              );
            })}
        </TabsContent>
      </Tabs>
    </div>
  );
}
