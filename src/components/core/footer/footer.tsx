'use client';
import { LayoutGrid, Radio } from 'lucide-react';
import Link from 'next/link';

import { Avatar } from '@/components/ui-parts/avatar';
import { NEXT_ROUTES } from '@/constants/app-routes';

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-3">
      <div className="flex items-center justify-evenly ">
        <Radio />
        <LayoutGrid />
        <LayoutGrid />
        <Link href={NEXT_ROUTES.LIST}>
          <Avatar image={'https://github.com/shadcn.png'} />
        </Link>
        <Link href={NEXT_ROUTES.USER}>
          <Avatar image={'https://github.com/shadcn.png'} />
        </Link>
      </div>
    </div>
  );
};
