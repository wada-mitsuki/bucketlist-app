'use client';
import React, { useState } from 'react';

import { Button } from '@/components/shadcn-ui/ui/button';
import { Input } from '@/components/shadcn-ui/ui/input';
import { Label } from '@/components/shadcn-ui/ui/label';
import { Switch } from '@/components/shadcn-ui/ui/switch';
import { Textarea } from '@/components/shadcn-ui/ui/textarea';
import { FormLayout } from '@/components/ui-parts';
import { createBucketlistitemMock } from '@/models/src/bucketlist/__mocks__';

interface EditFormProps {
  initialData?: {
    title: string;
    description: string;
  };
  onSubmit?: () => void;
  onCancel?: () => void;
}

export default function EditForm({
  initialData,
  onSubmit,
  onCancel,
}: EditFormProps) {
  const bucketMemo = createBucketlistitemMock();
  //   const [title, setTitle] = useState(initialData?.title);
  const [title, setTitle] = useState('タイトル');
  const [description, setDescription] = useState(initialData?.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="p-3 pt-0">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex flex-col gap-1 mb-12">
          <FormLayout labelText="やりたいこと">
            <div className="border-b w-full">
              <Input
                id="title"
                type="text"
                value={bucketMemo.title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
          </FormLayout>
          <FormLayout labelText="写真">
            <div className="border-b w-full">
              <Input
                id="title"
                type="text"
                value={bucketMemo.profile_image_url}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
          </FormLayout>
          <FormLayout labelText="予算">
            <div className="border-b w-full">
              <Input
                id="title"
                type="text"
                value={bucketMemo.created}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
          </FormLayout>
          <FormLayout labelText="場所">
            <div className="border-b w-full">
              <Input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
          </FormLayout>

          <FormLayout labelText="全体公開">
            <div className="flex items-center space-x-2 w-full border-b h-10">
              <Switch id="airplane-mode" checked={bucketMemo.opened} />
            </div>
          </FormLayout>

          <FormLayout labelText="メモ">
            <div className="border-b w-full ">
              <Textarea
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
          </FormLayout>
        </div>

        <div>
          <Button type="submit" className="text-white w-full">
            保存する
          </Button>
        </div>
      </form>
    </div>
  );
}