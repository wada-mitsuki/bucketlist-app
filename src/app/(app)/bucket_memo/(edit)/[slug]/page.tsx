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
import BucketlistCreateForm from '@/app/(app)/bucket_memo/_components/bucketlist-create-form/bucketlist-create-form';

interface EditFormProps {
  initialData?: {
    title: string;
    description: string;
  };
  onSubmit?: () => void;
  onCancel?: () => void;
}

export default function EditForm({ initialData, onCancel }: EditFormProps) {
  const { form, handleSubmit, bucketItem } = useBucketlistEditForm();

  return (
    <>
      <HeaderWithBackButton
        pageTitle="リスト編集"
        link={{ href: APP_ROUTES.BUCKET_MEMO }}
        right={<AchieveButton disabled={bucketItem.completed} size={'lg'} />}
      />
      <div className="flex flex-col gap-4 px-3">
        <BucketlistCreateForm form={form} />

        <Button type="submit" onClick={form.handleSubmit(handleSubmit)}>
          保存する
        </Button>
        <Button type="reset" variant={'outline'}>
          キャンセル
        </Button>
      </div>
    </>
  );
}
