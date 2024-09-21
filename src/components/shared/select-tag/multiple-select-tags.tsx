import { Avatar } from '@radix-ui/react-avatar';
import { CirclePlus, Lightbulb, NotebookText, User, Users } from 'lucide-react';
import { defaultOverrides } from 'next/dist/server/require-hook';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn-ui/ui/accordion';
import { Badge } from '@/components/shadcn-ui/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/shadcn-ui/ui/scroll-area';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/shadcn-ui/ui/toggle-group';
import { APP_ROUTES } from '@/constants/app-routes';

interface MultipleSelectTagsProps {
  route: string;
  onSmoothScrollToTop?: boolean;
  children: React.ReactNode;
}

export const MultipleSelectTags = () => {
  return (
    <Accordion type="single" collapsible className="border-none">
      <AccordionItem value="item-1">
        <AccordionTrigger>タグを選択</AccordionTrigger>
        <AccordionContent asChild>
          <ToggleGroup type="multiple">
            <ScrollArea className="w-full whitespace-nowrap">
              <ToggleGroupItem
                value="a"
                className="font-bold h-6 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs"
              >
                Badge
              </ToggleGroupItem>
              <ToggleGroupItem value="b">B</ToggleGroupItem>
              <ToggleGroupItem value="c">C</ToggleGroupItem>

              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </ToggleGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
