'use client';
import { HeaderWithBackButton } from '@/components/ui-parts';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <HeaderWithBackButton />
      <div>{children}</div>
    </div>
  );
}
