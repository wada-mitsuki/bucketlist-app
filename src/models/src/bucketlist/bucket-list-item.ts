import { User } from '@/models/src/user/user';

/**
 * バケットリスト（最小単位）
 */
export type BucketListItem = {
  id: string;
  /** ナンバリング */
  no: string;
  /** ユーザーID */
  user_id: User['id'];
  /** ユーザー写真 */
  profile_image_url: string;
  /** やりたいこと */
  title: string;
  /** 文章 */
  content: string;
  /** 作成日 */
  created: string;
  /** 編集日 */
  edited: string;
  /** いいね */
  likes: number;
  /** 達成済みフラグ */
  completed: boolean;
  /** 公開フラグ */
  opened: boolean;
  /** 写真 */
  images: string[];
};

/**
 * バケットリスト
 */
export type BucketList = BucketListItem[];
