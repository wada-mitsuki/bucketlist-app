'use client';
import { link } from 'fs';
import { ChevronLeft } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import router from 'next/router';
import React from 'react';

import { Button } from '@/components/shadcn-ui/ui/button';
import { Label } from '@/components/shadcn-ui/ui/label';
import { APP_ROUTES } from '@/constants/app-routes';

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
    <header className="flex items-center gap-2 py-3">
      <Button variant="ghost" size="icon">
        <Link {...link}>
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Back</span>
        </Link>
      </Button>

      <div className="flex items-center gap-2">
        <div className=" font-semibold tracking-tight text-slate-600">
          {pageTitle}
        </div>
      </div>

      <div className="ml-auto">{right}</div>
    </header>
  );
};
