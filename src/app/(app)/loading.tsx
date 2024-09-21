import { LoaderPinwheel } from 'lucide-react';

export default function Loading() {
  return (
    <div className="inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <LoaderPinwheel className="animate-spin text-white" />
    </div>
  );
}
