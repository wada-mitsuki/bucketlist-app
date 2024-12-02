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
  /** 達成後の感想 */
  content: string;
  /** 場所 */
  location: string;
  /** 予定日 */
  date: string;
  /** メモ */
  memo: string;
  /** 予算 */
  budget: number;
  /** いいね */
  likes: number;
  /** 達成済みフラグ */
  completed: boolean;
  /** 全体公開フラグ */
  opened: boolean;
  /** 写真 */
  images: string[];
  /** 作成日 */
  created: string;
  /** 編集日 */
  edited: string;
};

/**
 * バケットリスト
 */
export type BucketList = BucketListItem[];
