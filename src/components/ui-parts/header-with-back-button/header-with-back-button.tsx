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
    <header className="flex items-center gap-2 py-3 mb-3">
      <Button variant="ghost" size="icon" className="size-8" asChild>
        <Link {...link}>
          <ChevronLeft className="size-4 text-slate-600" />
        </Link>
      </Button>

      <div className="flex items-center gap-2">
        <div className=" font-semibold tracking-tight text-slate-600">
          {pageTitle}
        </div>
      </div>

      <div className="ml-auto">{right}</div>
    </header>

    //   <Button asChild variant="outline" size="icon" className="size-8">
    //   <Link {...link}>
    //     <ChevronLeft className="size-4" />
    //   </Link>
    // </Button>

    //   <Link onClick={handleBackClick} href="#">
    //     <div className="text-blue-500 p-2 flex items-center justify-start">
    //       <ChevronLeft className="w-5 h-5" />
    //       <Label className="ml-1 "> 戻る</Label>
    //     </div>
    //   </Link>
  );
};
