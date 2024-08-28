'use client';
import React, { useState } from 'react';

import { FormLayout } from '@/app/(feature)/bucket_memo/edit/_components/form-layout';
import { Button } from '@/components/shadcn-ui/ui/button';
import { Input } from '@/components/shadcn-ui/ui/input';
import { Label } from '@/components/shadcn-ui/ui/label';
import { Switch } from '@/components/shadcn-ui/ui/switch';
import { Textarea } from '@/components/shadcn-ui/ui/textarea';

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
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <FormLayout labelText="やりたいこと">
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            required
          />
        </FormLayout>
        <FormLayout labelText="写真">
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full"
            required
          />
        </FormLayout>
        <FormLayout labelText="予算">
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full"
            required
          />
        </FormLayout>
        <FormLayout labelText="場所">
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full"
            required
          />
        </FormLayout>
        <FormLayout labelText="公開">
          <div className="flex items-center space-x-2 w-full">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">全体に公開</Label>
          </div>
        </FormLayout>

        {/* <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="bg-blue-500 text-white">
            Save
          </Button>
        </div> */}
      </form>
    </div>
  );
}
