'use client';
import { CirclePlus, Lightbulb, NotebookText, User, Users } from 'lucide-react';
import { defaultOverrides } from 'next/dist/server/require-hook';
import { Url } from 'next/dist/shared/lib/router/router';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { UrlObject } from 'url';

import { APP_ROUTES } from '@/constants/app-routes';

type ScrollToTopProps = {
  href: UrlObject;
  onSmoothScrollToTop?: boolean;
  children: React.ReactNode;
} & LinkProps;

const displayFooterLabel = (route: string) => {
  switch (route) {
    case APP_ROUTES.TOP:
      return 'みんなの';
    case APP_ROUTES.SEARCH:
      return '探す';
    case APP_ROUTES.BUCKET_MEMO:
      return '私の';
    case APP_ROUTES.USER:
      return 'ユーザー';
  }
};

export const FooterMenu = ({
  href,
  onSmoothScrollToTop = false,
  children,
  ...linkProps
}: ScrollToTopProps) => {
  const pathName = usePathname();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  console.log('🚀 ~ href.pathname :', href.pathname);
  console.log('🚀 ~ pathName :', pathName);

  return (
    <Link
      href={href}
      scroll={!onSmoothScrollToTop}
      {...linkProps}
      onClick={() => scrollToTop()}
    >
      <div
        className={`flex flex-col items-center ${href.pathname === pathName ? 'text-primary dark:text-white' : ''}`}
      >
        {children}
      </div>
    </Link>
  );
};
