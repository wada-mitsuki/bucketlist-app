import { valibotResolver } from '@hookform/resolvers/valibot';
import { useForm } from 'react-hook-form';
import { InferInput, InferOutput } from 'valibot';

import { bucketListFormSchema } from '@/models/src/bucketlist/schema/bucket-list-form-schema';
import { createBucketlistitemMock } from '@/models/src/bucketlist/__mocks__';

export const useBucketlistEditForm = () => {
  const bucketItem = createBucketlistitemMock();
  console.log('🚀 ~ useBucketlistEditForm ~ bucketItem:', bucketItem);

  const form = useForm<InferInput<typeof bucketListFormSchema>>({
    resolver: valibotResolver(bucketListFormSchema),
    defaultValues: bucketItem,
  });

  const handleSubmit = (data: InferOutput<typeof bucketListFormSchema>) => {
    console.log(data);
  };

  return {
    form,
    handleSubmit,
    bucketItem,
  };
};
