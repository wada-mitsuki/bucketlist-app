'use client';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useCallback, useState } from 'react';
import { InferInput } from 'valibot';

import { bucketListFormSchema } from '@/models/src/bucketlist/schema/bucket-list-form-schema';

const DEFAULT_FORM_VALUE = {
  title: '',
  location: '',
  date: '',
  budget: '',
  public: true,
  memo: '',
} satisfies InferInput<typeof bucketListFormSchema>;

export const useBucketMemo = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 3000);
  };

  return {
    handleClick,
    showOverlay,
  };
};
