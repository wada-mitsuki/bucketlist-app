import { cn } from '@/lib/utils';

interface CreateBucketMemoDrawer {
  labelText: string;
  className?: string;
  children: React.ReactNode;
}

export const FormLayout = ({
  labelText,
  className,
  children,
}: CreateBucketMemoDrawer) => {
  return (
    <div className={cn('flex items-center justify-start py-2', className)}>
      <label
        htmlFor="title"
        className="w-36 block text-sm font-medium text-gray-700 text-left"
      >
        {labelText}
      </label>
      {children}
    </div>
  );
};
