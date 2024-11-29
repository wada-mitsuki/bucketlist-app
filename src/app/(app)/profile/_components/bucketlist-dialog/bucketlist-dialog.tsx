import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/shadcn-ui/ui/dialog';
import { BucketListItem } from '@/models/src';

interface Props {
  bucketList: BucketListItem;
  onClose: () => void;
}

export const BucketlistDialog = ({ bucketList, onClose }: Props) => {
  return (
    <Dialog open={!!bucketList} onOpenChange={() => onClose()}>
      <DialogContent className="w-[300px]">
        <DialogHeader>
          <DialogTitle>{bucketList.title}</DialogTitle>
          <DialogDescription>{bucketList.content}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
