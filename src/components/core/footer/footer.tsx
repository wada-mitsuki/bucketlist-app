'use client';
import { List, NotebookText, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Avatar as ShadcnAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn-ui/ui/avatar';
import { Avatar } from '@/components/ui-parts/avatar';
import { NEXT_ROUTES } from '@/constants/app-routes';

export const Footer = () => {
  const pathName = usePathname();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-0 w-full bg-white text-gray-400 p-3 border-t-2 dark:bg-primary">
      <div className="flex items-center justify-evenly ">
        <Link href={NEXT_ROUTES.HOME} onClick={scrollToTop} scroll={false}>
          <List
            className={pathName === NEXT_ROUTES.HOME ? 'text-primary' : ''}
          />
        </Link>
        <Link href={NEXT_ROUTES.BUCKET_MEMO}>
          <NotebookText
            className={
              pathName === NEXT_ROUTES.BUCKET_MEMO ? 'text-primary' : ''
            }
          />
        </Link>
        <Link href={NEXT_ROUTES.USER}>
          <ShadcnAvatar
            className={
              pathName === NEXT_ROUTES.USER ? 'border-2 border-primary' : ''
            }
          >
            <AvatarImage src={'https://github.com/shadcn.png'} />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </ShadcnAvatar>
          {/* <Avatar
            image={'https://github.com/shadcn.png'}
            className={
              pathName === NEXT_ROUTES.BUCKET_MEMO ? 'text-primary' : ''
            }
          /> */}
        </Link>
      </div>
    </div>
  );
};
