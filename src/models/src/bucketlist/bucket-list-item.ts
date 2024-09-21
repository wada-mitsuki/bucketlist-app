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
  opened: boolean;
};

export type BucketListDetailItem = {
  id: string;
  user_id: User['id'];
  title: string;
  content: string;
  profile_image_url: string;
  created: string;
  edited: string;
  likes: string;
  completed: boolean;
  opened: boolean;
};

/**
 * みんなのバケットリスト
 */
export type BucketListListItem = {
  id: string;
  user_id: User['id'];
  user_name: User['user_name'];
  title: string;
  content: string;
  profile_image_url: string;
  created: string;
  edited: string;
  likes: string;
  completed: boolean;
  opened: boolean;
};
