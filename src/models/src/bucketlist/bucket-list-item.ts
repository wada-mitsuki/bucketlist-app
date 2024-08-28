import { User } from '@/models/src';

// WIP
export type BucketListItem = {
  id: string;
  user_id: User['id'];
  title: string;
  content: string;
  profile_image_url: string;
  created: string;
  edited: string;
  likes: string;
  completed: boolean;
};
