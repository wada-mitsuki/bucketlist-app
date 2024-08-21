import { MainNavItem, SidebarNavItem } from '@/types/nav';

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  chartsNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
          items: [],
        },
      ],
    },
  ],
  chartsNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs/charts',
          items: [],
        },
        {
          title: 'Installation',
          href: '/docs/charts/installation',
          items: [],
        },
        {
          title: 'Theming',
          href: '/docs/charts/theming',
          items: [],
        },
      ],
    },
  ],
};
