'use client';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Label } from '@/components/shadcn-ui/ui/label';

export const HeaderWithBackButton = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Link onClick={handleBackClick} href="#">
      <div className="text-blue-500 p-2 flex items-center justify-start">
        <ChevronLeft className="w-5 h-5" />
        <Label className="ml-1 "> 戻る</Label>
      </div>
    </Link>
  );
};
