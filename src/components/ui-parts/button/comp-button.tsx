import { Button } from '@/components/shadcn-ui/ui/button';

export const CompButton = () => {
  return (
    <Button className="ml-auto h-7 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold hover:from-purple-400 hover:via-pink-400 hover:to-red-400 shadow-lg transform transition-transform hover:scale-105">
      達成!
    </Button>
  );
};
