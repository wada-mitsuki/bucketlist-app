import {
  BookX,
  FileText,
  LayoutGrid,
  Library,
  ListMusic,
  LogOut,
  MessageCircleWarning,
  Settings,
  User,
} from 'lucide-react';
import React from 'react';

import { Label } from '@/components/shadcn-ui/ui/label';
import { cn } from '@/lib/utils';

export const SettingSheetContainer = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    return (
      <div className={cn('pb-12')} ref={ref}>
        <div className="space-y-4 py-2 text-left">
          <div className="px-2 py-2">
            <div className="flex flex-col gap-3 space-y-1">
              <div className="w-full border-b flex gap-2 items-center p-2">
                <MessageCircleWarning className="mr-2 h-4 w-4" />
                <Label>使い方</Label>
              </div>
              <div className="w-full border-b flex gap-2 items-center p-2">
                <User className="mr-2 h-4 w-4" />
                <Label>プロフィール</Label>
              </div>
              <div className="w-full border-b flex gap-2 items-center p-2">
                <Settings className="mr-2 h-4 w-4" />
                <Label>アカウント設定</Label>
              </div>
              <div className="w-full border-b flex gap-2 items-center p-2">
                <FileText className="mr-2 h-4 w-4" />
                <Label>利用規約</Label>
              </div>
              <div className="w-full border-b flex gap-2 items-center p-2 text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <Label>ログアウト</Label>
              </div>
              <div className="w-full border-b flex gap-2 items-center p-2 text-red-500">
                <BookX className="mr-2 h-4 w-4" />
                <Label>アカウント削除</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

SettingSheetContainer.displayName = 'SettingSheetContainer';
