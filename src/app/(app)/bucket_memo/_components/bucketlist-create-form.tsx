'use client';
import { fi } from '@faker-js/faker';
import { format, setDate } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { date, InferInput } from 'valibot';

import { useBucketlistCreateForm } from '@/app/(app)/bucket_memo/_components/_hooks/use-bucketlist-create-form';
import { Button } from '@/components/shadcn-ui/ui/button';
import { Calendar } from '@/components/shadcn-ui/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn-ui/ui/form';
import { Input } from '@/components/shadcn-ui/ui/input';
import { Label } from '@/components/shadcn-ui/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcn-ui/ui/popover';
import { Switch } from '@/components/shadcn-ui/ui/switch';
import { Textarea } from '@/components/shadcn-ui/ui/textarea';
import { MultipleSelectTags } from '@/components/shared/select-tag/multiple-select-tags';
import { FormLayout } from '@/components/ui-parts';
import { DatePicker } from '@/components/ui-parts/form/data-picker';
import { cn } from '@/lib/utils';
import { bucketListFormSchema } from '@/models/src/bucket-list-form-schema';

interface BucketlistCreateFormProps {
  /** フォーム管理Props */
  form: UseFormReturn<InferInput<typeof bucketListFormSchema>>;
}
export default function BucketlistCreateForm({
  form,
}: BucketlistCreateFormProps) {
  return (
    <div className="mt-5">
      <Form {...form}>
        <form className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[auto,1fr] items-center gap-4 space-y-0">
                <FormLabel
                  className="min-w-[100px] text-sm font-medium text-slate-500 text-left"
                  required
                >
                  やりたいこと
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[auto,1fr] items-center gap-4 space-y-0">
                <div className="min-w-[100px] text-sm font-medium text-slate-500 text-left">
                  日程
                </div>
                {/* <FormLabel
                  
                  className="min-w-[100px] text-sm font-medium text-slate-500 text-left"
                >
                  日程
                </FormLabel> */}
                <FormControl>
                  <DatePicker value={field.value} onSelect={field.onChange} />
                  {/* <Input {...field} /> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[auto,1fr] items-center gap-4 space-y-0">
                <FormLabel className="min-w-[100px] text-sm font-medium text-slate-500 text-left">
                  場所
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[auto,1fr] items-center gap-4 space-y-0">
                <FormLabel className="min-w-[100px] text-sm font-medium text-slate-500 text-left">
                  予算
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="public"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[auto,1fr] items-center gap-4 space-y-0">
                <FormLabel className="min-w-[100px] text-sm font-medium text-slate-500 text-left">
                  全体公開
                </FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="memo"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[auto,1fr] items-center gap-4 space-y-0">
                <FormLabel className="min-w-[100px] text-sm font-medium text-slate-500 text-left">
                  メモ
                </FormLabel>
                <FormControl>
                  <Textarea {...field} className="h-30" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
