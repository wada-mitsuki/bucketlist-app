'use client';
import { CirclePlus, Lightbulb, NotebookText, User, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { FooterMenu } from '@/components/core/footer/components/footer-menu';
import {
  Avatar as ShadcnAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn-ui/ui/avatar';
import { Avatar } from '@/components/ui-parts/avatar';
import { APP_ROUTES } from '@/constants/app-routes';

export const Footer = () => {
  const pathName = usePathname();

  return (
    <div className="fixed bottom-0 w-full bg-white text-gray-400 p-3 border-t-2 dark:bg-primary">
      <div className="flex items-center justify-evenly ">
        <FooterMenu route={APP_ROUTES.TOP} onSmoothScrollToTop>
          <Users />
        </FooterMenu>
        <FooterMenu route={APP_ROUTES.BUCKET_MEMO} onSmoothScrollToTop>
          <NotebookText />
        </FooterMenu>
        <FooterMenu route={APP_ROUTES.TOP} onSmoothScrollToTop>
          <CirclePlus />
        </FooterMenu>
        <FooterMenu route={APP_ROUTES.SEARCH} onSmoothScrollToTop>
          <Lightbulb />
        </FooterMenu>
        <FooterMenu route={APP_ROUTES.USER} onSmoothScrollToTop>
          <ShadcnAvatar
            className={
              pathName === APP_ROUTES.USER ? 'border-2 border-primary' : ''
            }
          >
            <AvatarImage src={'https://github.com/shadcn.png'} />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </ShadcnAvatar>
        </FooterMenu>
      </div>
    </div>
  );
};
