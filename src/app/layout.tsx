import './globals.css';

import type { Metadata } from 'next';
import { Noto_Sans_JP as FontSans } from 'next/font/google';

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
        {children}
      </body>
    </html>
  );
}
