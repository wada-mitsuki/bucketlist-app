'use client';
import { User } from 'lucide-react';
import React from 'react';

import BucketList from '@/app/(app)/(top)/page';
import LoginPage from '@/app/(auth)/login/login-page';
import { ScrollArea, ScrollBar } from '@/components/shadcn-ui/ui/scroll-area';
import { Avatar } from '@/components/ui-parts';
import { APP_ROUTES } from '@/constants/app-routes';

export default function Login() {
  return <LoginPage />;
}
