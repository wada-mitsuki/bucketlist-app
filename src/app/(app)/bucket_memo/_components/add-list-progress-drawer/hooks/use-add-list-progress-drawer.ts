import { valibotResolver } from '@hookform/resolvers/valibot';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InferInput, InferOutput } from 'valibot';

import { createProgressMocks } from '@/models/src/progress/__mocks__/progress.mock';
import { progressFormSchema } from '@/models/src/progress/schema/progress-form-schema';

const DEFAULT_FORM_VALUE = {
  id: '',
  user_id: '',
  list_id: '',
  content: '',
} satisfies InferInput<typeof progressFormSchema>;

export const useAddListProgressDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const progress = createProgressMocks();

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

  const form = useForm<InferInput<typeof progressFormSchema>>({
    resolver: valibotResolver(progressFormSchema),
    defaultValues: DEFAULT_FORM_VALUE,
  });

  const onSubmit = (data: InferOutput<typeof progressFormSchema>) => {
    setIsOpen(false);
    form.reset();
  };

  return {
    progress,
    form,
    onSubmit,
    isOpen,
    onOpenChange,
  };
};
