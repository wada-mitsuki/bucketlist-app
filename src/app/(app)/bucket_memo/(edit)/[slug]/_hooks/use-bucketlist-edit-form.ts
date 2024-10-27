import { valibotResolver } from '@hookform/resolvers/valibot';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  boolean,
  InferInput,
  InferOutput,
  nonEmpty,
  object,
  pipe,
  regex,
  string,
} from 'valibot';

import { bucketListFormSchema } from '@/models/src/bucket-list-form-schema';

const DEFAULT_FORM_VALUE = {
  title: '',
  location: '',
  date: '',
  budget: '',
  public: true,
  memo: '',
} satisfies InferInput<typeof bucketListFormSchema>;

export const useBucketlistEditForm = () => {
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
    console.log(data);
  };

  return {
    form,
    onSubmit,
  };
};
