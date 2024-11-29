'use client';
import {
  CirclePlus,
  CircleUserRound,
  Lightbulb,
  NotebookText,
  User,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FooterMenu } from '@/components/core/footer/components/footer-menu';
import {
  Avatar as ShadcnAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn-ui/ui/avatar';
import { Avatar } from '@/components/ui-parts/avatar';
import { APP_ROUTES } from '@/constants/app-routes';
import { pagesPath } from '@/lib/$path';

export const Footer = () => {
  const path = pagesPath.profile._id('a').$url();
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full px-12 py-3 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div className="flex justify-between">
        <FooterMenu href={pagesPath.top.$url()} onSmoothScrollToTop>
          <Users />
        </FooterMenu>
        <FooterMenu href={pagesPath.bucket_memo.$url()} onSmoothScrollToTop>
          <NotebookText />
        </FooterMenu>
        {/* <FooterMenu route={} onSmoothScrollToTop>
          <CirclePlus />
          </FooterMenu> */}
        <FooterMenu href={pagesPath.search.$url()} onSmoothScrollToTop>
          <Lightbulb />
        </FooterMenu>
        <Link href={path.path}>
          <CircleUserRound />
        </Link>
      </div>
    </footer>
  );
};
