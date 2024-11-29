'use client';
import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InferInput, title } from 'valibot';

import { useBucketlistEditForm } from '@/app/(app)/bucket_memo/(edit)/[slug]/_hooks/use-bucketlist-edit-form';
import { Button } from '@/components/shadcn-ui/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn-ui/ui/form';
import { Input } from '@/components/shadcn-ui/ui/input';
import { Label } from '@/components/shadcn-ui/ui/label';
import { Switch } from '@/components/shadcn-ui/ui/switch';
import { Textarea } from '@/components/shadcn-ui/ui/textarea';
import { FormLayout, HeaderWithBackButton } from '@/components/ui-parts';
import { AchieveButton } from '@/components/ui-parts/achieve-button/achieve-button';
import { APP_ROUTES } from '@/constants/app-routes';
import { createBucketlistitemMock } from '@/models/src/bucketlist/__mocks__';
import { bucketListFormSchema } from '@/models/src/bucketlist/schema/bucket-list-form-schema';

interface EditFormProps {
  initialData?: {
    title: string;
    description: string;
  };
  onSubmit?: () => void;
  onCancel?: () => void;
}

export default function EditForm({ initialData, onCancel }: EditFormProps) {
  const bucketMemo = createBucketlistitemMock();
  //   const [title, setTitle] = useState(initialData?.title);

  const { form, onSubmit, handleClick, showOverlay } = useBucketlistEditForm();

  return (
    <>
      <HeaderWithBackButton
        pageTitle="リスト編集"
        link={{ href: APP_ROUTES.BUCKET_MEMO }}
        right={<AchieveButton disabled={bucketMemo.completed} size={'lg'} />}
      />
      <div className="p-3 pt-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="grid grid-cols-[auto,1fr] items-center gap-4 space-y-0">
                  <FormLabel
                    htmlFor={field.name}
                    className="min-w-[100px] text-sm font-medium text-slate-500"
                    required
                  >
                    やりたいこと
                  </FormLabel>
                  <FormControl>
                    <Input id="" {...field} />
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
                  <FormLabel className="min-w-[100px] text-sm font-medium text-slate-500">
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
                  <FormLabel className="min-w-[100px] text-sm font-medium text-slate-500">
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
              name="budget"
              render={({ field }) => (
                <FormItem className="grid grid-cols-[auto,1fr] items-center gap-4 space-y-0">
                  <FormLabel className="min-w-[100px] text-sm font-medium text-slate-500">
                    全体公開
                  </FormLabel>
                  <FormControl className="mt-0">
                    <Switch {...field} />
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
                  <FormLabel className="min-w-[100px] text-sm font-medium text-slate-500">
                    メモ
                  </FormLabel>
                  <FormControl className="mt-0">
                    <Textarea {...field} className="h-30" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">保存する</Button>
            <Button type="reset" variant={'outline'}>
              キャンセル
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
