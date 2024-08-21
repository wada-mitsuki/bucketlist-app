import {
  Avatar as ShadcnAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn-ui/ui/avatar';

interface AvatarType {
  image: string;
}

export const Avatar = ({ image }: AvatarType) => {
  return (
    <ShadcnAvatar>
      <AvatarImage src={image} />
      <AvatarFallback>CN</AvatarFallback>
    </ShadcnAvatar>
  );
};
