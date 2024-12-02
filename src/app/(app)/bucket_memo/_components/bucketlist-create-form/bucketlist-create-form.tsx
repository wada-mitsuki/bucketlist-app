'use client';
import { UseFormReturn } from 'react-hook-form';
import { InferInput } from 'valibot';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn-ui/ui/form';
import { Input } from '@/components/shadcn-ui/ui/input';

import { Switch } from '@/components/shadcn-ui/ui/switch';
import { Textarea } from '@/components/shadcn-ui/ui/textarea';
import { DatePicker } from '@/components/ui-parts/form/data-picker';
import { bucketListFormSchema } from '@/models/src/bucketlist/schema/bucket-list-form-schema';
import { AutosizeTextarea } from '@/components/shadcn-ui/ui/auto-size-text-area';

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
                <div>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-left" />
                </div>
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
                <FormControl>
                  <DatePicker value={field.value} onSelect={field.onChange} />
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
                  <AutosizeTextarea
                    {...field}
                    className="h-30 whitespace-pre-wrap"
                  />
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
