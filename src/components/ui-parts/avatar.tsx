import { User } from 'lucide-react';

import {
  Avatar as ShadcnAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn-ui/ui/avatar';

interface AvatarType {
  image: string;
  style?: string;
}

export const Avatar = ({ image, style }: AvatarType) => {
  return (
    <ShadcnAvatar className={style}>
      <AvatarImage src={image} />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </ShadcnAvatar>
  );
};
