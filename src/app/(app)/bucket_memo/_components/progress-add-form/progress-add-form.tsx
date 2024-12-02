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
import { Textarea } from '@/components/shadcn-ui/ui/textarea';
import { progressFormSchema } from '@/models/src/progress/schema/progress-form-schema';

interface ProgressAddFormProps {
  /** フォーム管理Props */
  form: UseFormReturn<InferInput<typeof progressFormSchema>>;
}
export const ProgressAddForm = ({ form }: ProgressAddFormProps) => {
  return (
    <div className="mt-5">
      <Form {...form}>
        <form className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[auto,1fr] items-center gap-4 space-y-0">
                <FormLabel className="min-w-[100px] text-sm font-medium text-slate-500 text-left">
                  進捗
                </FormLabel>
                <FormControl>
                  <Textarea {...field} className="h-30" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
