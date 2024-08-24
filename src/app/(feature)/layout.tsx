'use client';
import { Footer } from '@/components/core/footer/footer';
import { LazyMotion, domAnimation } from 'framer-motion';
import { HeaderMenu } from '@/components/core/header/heder-menu';
import MotionWrapper from '@/components/core/motion-wrapper/motion-wrapper';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <HeaderMenu />
      <div className="mt-12 mb-12">{children}</div>
      <Footer />
    </div>
  );
}
