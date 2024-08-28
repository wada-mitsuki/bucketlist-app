// eslint-disable-next-line no-restricted-imports
import './globals.css';

import type { Metadata } from 'next';
import { Noto_Sans_JP as FontSans } from 'next/font/google';

import { HeaderMenu } from '@/components/core';
import { Footer } from '@/components/core/footer/footer';
import { cn } from '@/lib/utils';

const inter = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'temp App',
  description: 'template next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <HeaderMenu />
        <div className="mt-12 mb-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
