import { LoaderPinwheel } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <LoaderPinwheel className="animate-spin" />
    </div>
  );
}
