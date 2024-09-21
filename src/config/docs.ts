import { Icons } from '@/components/shadcn-ui/ui/icons';
import { APP_ROUTES } from '@/constants/app-routes';
import { FooterNavItem, MainNavItem, SidebarNavItem } from '@/types/nav';

export interface DocsConfig {
  footerNav: FooterNavItem[];
}

export const docsConfig: DocsConfig = {
  footerNav: [
    {
      title: 'TOP',
      href: APP_ROUTES.TOP,
      label: 'みんなの',
    },
  ],
};
