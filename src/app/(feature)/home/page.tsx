import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/shadcn-ui/ui/tabs';
import { BucketlistListItem } from '@/components/ui-parts/bucketlist-list-item';

interface DocsLayoutProps {
  children?: React.ReactNode;
}

export default function BucketList({ children }: DocsLayoutProps) {
  return (
    <div className="">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="done">Done</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <BucketlistListItem />
          <BucketlistListItem />
          <BucketlistListItem />
          <BucketlistListItem />
          <BucketlistListItem />
        </TabsContent>
        <TabsContent value="done">
          <BucketlistListItem />
          <BucketlistListItem />
        </TabsContent>
      </Tabs>
    </div>
  );
}
