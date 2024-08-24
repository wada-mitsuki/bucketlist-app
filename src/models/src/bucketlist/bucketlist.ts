import { User } from '@/models/src/user/user';

// WIP
export type BucketListItem = {
  id: string;
  user: User;
  content: string;
  profile_image_url: string;
  created: string;
  likes: string;
  completed: boolean;
};
