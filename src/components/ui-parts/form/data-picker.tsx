'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { ComponentProps, useState } from 'react';

import { Button } from '@/components/shadcn-ui/ui/button';
import { Calendar } from '@/components/shadcn-ui/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcn-ui/ui/popover';
import { cn } from '@/lib/utils';

interface DatePickerProps {
  value?: string;
  onSelect?: (date: string) => void;
  calendarProps?: ComponentProps<typeof Calendar>;
}

export const DatePicker = ({
  value,
  onSelect,
  calendarProps,
}: DatePickerProps) => {
  const date = value ? new Date(value) : undefined;
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      if (onSelect) {
        onSelect(format(selectedDate, 'yyyy-MM-dd'));
      }
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          {date ? (
            format(date, 'yyyy/MM/dd (E)')
          ) : (
            <span>日程決めるとやるしかない</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={handleSelect} />
      </PopoverContent>
    </Popover>
  );
};
