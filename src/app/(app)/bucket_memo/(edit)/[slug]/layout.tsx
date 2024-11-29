'use client';
import { useRouter } from 'next/router';

import { HeaderWithBackButton } from '@/components/ui-parts';
import { APP_ROUTES } from '@/constants/app-routes';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <div>{children}</div>
    </div>
  );
}
