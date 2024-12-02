import { ChevronLeft } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import React from 'react';

import { Button } from '@/components/shadcn-ui/ui/button';

interface Props {
  pageTitle?: React.ReactNode;
  link: LinkProps;
  right?: React.ReactNode;
}

export const HeaderWithBackButton = ({
  pageTitle,
  link = { href: '/' },
  right,
}: Props) => {
  return (
    <header className="flex items-center px-2 pt-2 w-full">
      <Button variant="ghost" className="flex items-center gap-1" asChild>
        <Link {...link} passHref legacyBehavior>
          <a className="px-0 py-2 flex items-center ">
            <ChevronLeft className="h-6 w-6" />

            {pageTitle && (
              <div className=" font-semibold  text-slate-600">{pageTitle}</div>
            )}
          </a>
        </Link>
      </Button>

      <div className="ml-auto">{right}</div>
    </header>
  );
};
