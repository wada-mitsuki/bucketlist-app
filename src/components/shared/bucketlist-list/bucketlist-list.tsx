import { ChevronLeft } from 'lucide-react';
import React from 'react';

import { ScrollArea } from '@/components/shadcn-ui/ui/scroll-area';
import { BG_MAIN_STYLE } from '@/config/bg-main-style';
import { BucketListItem } from '@/models/src';

interface Props {
  bucketList: BucketListItem[]; // Define your props here
}

export const BucketlistList = ({ bucketList }: Props) => {
  return (
    <ScrollArea className="h-full">
      <ul className="divide-y">
        {bucketList.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-accent"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-3 h-3 rounded-full ${item.completed ? BG_MAIN_STYLE : 'bg-gray-300'}`}
              />
              <span className="font-medium">No.{item.no}</span>
              <span className="font-medium">{item.title}</span>
            </div>
            <ChevronLeft className="h-5 w-5 transform rotate-180" />
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};
