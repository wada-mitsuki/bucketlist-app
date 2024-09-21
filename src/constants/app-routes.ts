import { ServerCrash } from 'lucide-react';

export const APP_ROUTES = {
  /** TOP(みんなのリスト一覧)  */
  TOP: '/',
  /** 探す */
  SEARCH: '/search',
  /** ユーザー画面 */
  USER: '/user',
  /** 私のリスト */
  BUCKET_MEMO: '/bucket_memo',
} as const;
