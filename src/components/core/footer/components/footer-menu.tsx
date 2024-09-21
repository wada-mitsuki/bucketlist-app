'use client';
import { CirclePlus, Lightbulb, NotebookText, User, Users } from 'lucide-react';
import { defaultOverrides } from 'next/dist/server/require-hook';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { APP_ROUTES } from '@/constants/app-routes';

interface ScrollToTopProps {
  route: string;
  onSmoothScrollToTop?: boolean;
  children: React.ReactNode;
}

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
  route,
  onSmoothScrollToTop = false,
  children,
}: ScrollToTopProps) => {
  const pathName = usePathname();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLabel = displayFooterLabel(route);

  return (
    <Link href={route} onClick={scrollToTop} scroll={!onSmoothScrollToTop}>
      <div
        className={`flex flex-col items-center ${pathName === route ? 'text-primary dark:text-white' : ''}`}
      >
        {children}
        {/* <span className="text-xs">{footerLabel}</span> */}
      </div>
    </Link>
  );
};
