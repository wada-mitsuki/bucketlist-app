'use client';

import { Footer } from '@/components/core/footer/footer';
import { HeaderMenu } from '@/components/core/header/heder-menu';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <HeaderMenu />
      <div className="mt-12 mb-16">{children}</div>
      <Footer />
    </div>
  );
}
