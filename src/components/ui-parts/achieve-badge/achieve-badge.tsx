import { Badge } from '@/components/shadcn-ui/ui/badge';
import { BG_MAIN_STYLE } from '@/config/bg-main-style';

export const AchieveBadge = () => {
  return (
    <Badge className={`min-w-max text-white ${BG_MAIN_STYLE}`}>達成</Badge>
  );
};
