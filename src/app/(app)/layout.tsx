'use client';
import { domAnimation, LazyMotion } from 'framer-motion';
import { Suspense } from 'react';

import { Footer } from '@/components/core/footer/footer';
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
      <div className="mt-12 mb-16">{children}</div>
      <Footer />
    </div>
  );
}
