import { PartyPopper, Sparkles } from 'lucide-react';

import { Badge } from '@/components/shadcn-ui/ui/badge';
import { Avatar } from '@/components/ui-parts/avatar';

interface BucketlistListItemProps {
  avatar: string;
  displayName: string;
  username: string;
  timestamp: string;
  content: string;
  image?: string; // 投稿に画像が含まれる場合
}

export const BucketlistListItem = () => {
  return (
    <div className="flex p-4 border-gray-200 max-w-2xl m-auto border-b">
      {/* アバター */}
      <div className="mr-3">
        <Avatar image={'https://github.com/shadcn.png'} />
      </div>

      {/* 投稿の内容 */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 align-middle">
            <span className="font-bold text-gray-900">わっち</span>
            <span className="text-gray-500">@wacci</span>
            <span className="text-gray-500">· 2222/22/22</span>
            <Badge className="bg-red-700 text-white">達成</Badge>
          </div>
        </div>

        {/* 
        {image && (
          <div className="mt-4">
            <img src={image} alt="Tweet content" className="rounded-lg" />
          </div>
        )} */}

        <div className="">
          <p className="mt-1 text-gray-800">
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>

        {/* インタラクションボタン */}
        <div className="flex gap-4 justify-start mt-4 text-gray-500">
          <button className="flex items-center space-x-1 hover:text-red-500">
            <Sparkles className="w-5 h-5" />
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <PartyPopper className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
