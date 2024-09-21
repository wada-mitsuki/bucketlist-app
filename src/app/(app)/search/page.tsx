'use client';
import { User } from 'lucide-react';
import React from 'react';

import BucketList from '@/app/(app)/(top)/page';
import { ScrollArea, ScrollBar } from '@/components/shadcn-ui/ui/scroll-area';
import { Avatar } from '@/components/ui-parts';
import { APP_ROUTES } from '@/constants/app-routes';

export default function Search() {
  const adventureTravel = [
    '海外',
    'アクティブ',
    '生き方',
    '夢',
    'ゲーム',
    '思想',
    'テスト',
  ];

  return (
    <div>
      <div className="p-2 flex flex-col gap-3">
        <div className="font-bold">ジャンルから探す</div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-5">
            {adventureTravel.map((item, index) => {
              return (
                <div className="flex flex-col items-center gap-1" key={index}>
                  <Avatar
                    image={'https://github.com/shadcn.png'}
                    style="w-12 h-12"
                  />
                  <p className="font-bold text-sm">{item}</p>
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <BucketList />
    </div>
  );
}
