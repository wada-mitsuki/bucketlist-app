import { BucketListDetailItem } from '@/models/src/bucketlist';

// WIP
export type User = {
  id: string;
  user_name: string;
  mail: string;
  profile_image_url: string;
  verified: boolean;
  BucketList: BucketListDetailItem[];
};
