import {
  BookX,
  Clover,
  FileText,
  LogOut,
  MessageCircleWarning,
  Settings,
  User,
} from 'lucide-react';
import React from 'react';

import { Button } from '@/components/shadcn-ui/ui/button';
import { Label } from '@/components/shadcn-ui/ui/label';
import { cn } from '@/lib/utils';

const SettingSheetButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string | React.ReactNode;
}) => {
  return (
    <Button
      className="w-full border-b flex gap-2 items-center p-2 no-underline justify-start"
      variant={'ghost'}
    >
      {icon}
      <Label className="no-underline">{label}</Label>
    </Button>
  );
};

export const SettingSheetContainer = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    return (
      <div className={cn('pb-12')} ref={ref}>
        <div className="space-y-4 py-2 text-left">
          <div className="px-2 py-2">
            <div className="flex flex-col gap-3 space-y-1">
              <SettingSheetButton
                icon={<MessageCircleWarning className="mr-2 h-4 w-4" />}
                label="このアプリの使用方法"
              />
              <SettingSheetButton
                icon={<User className="mr-2 h-4 w-4" />}
                label="プロフィール"
              />
              <SettingSheetButton
                icon={<Settings className="mr-2 h-4 w-4" />}
                label="アカウント設定"
              />
              <SettingSheetButton
                icon={<Clover className="mr-2 h-4 w-4" />}
                label="作成予定の機能"
              />
              <SettingSheetButton
                icon={<FileText className="mr-2 h-4 w-4" />}
                label="開発者の想い"
              />
              <SettingSheetButton
                icon={<FileText className="mr-2 h-4 w-4" />}
                label="利用規約"
              />
              <SettingSheetButton
                icon={<LogOut className="mr-2 h-4 w-4 text-red-500" />}
                label={<Label className="text-red-500">ログアウト</Label>}
              />
              <SettingSheetButton
                icon={<BookX className="mr-2 h-4 w-4 text-red-500" />}
                label={<Label className="text-red-500">アカウント削除</Label>}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

SettingSheetContainer.displayName = 'SettingSheetContainer';
