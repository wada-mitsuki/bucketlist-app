import { valibotResolver } from '@hookform/resolvers/valibot';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InferInput, InferOutput } from 'valibot';

import { bucketListFormSchema } from '@/models/src/bucketlist/schema/bucket-list-form-schema';

const DEFAULT_FORM_VALUE = {
  title: '',
  location: '',
  date: '',
  budget: 0,
  public: true,
  memo: '',
  id: '',
} satisfies InferInput<typeof bucketListFormSchema>;

export const useBucketlistCreateForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (nextOpen) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    },
    [setIsOpen],
  );

  const form = useForm<InferInput<typeof bucketListFormSchema>>({
    resolver: valibotResolver(bucketListFormSchema),
    defaultValues: DEFAULT_FORM_VALUE,
  });

  const onSubmit = (data: InferOutput<typeof bucketListFormSchema>) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
    setIsOpen(false);
    form.reset();
  };

  return {
    form,
    onSubmit,
    isOpen,
    onOpenChange,
  };
};
