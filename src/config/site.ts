export const SITE_URL = 'https://ui.shadcn.com' as const;

export const siteConfig = {
  name: 'test',
  url: SITE_URL,
  ogImage: 'https://ui.shadcn.com/og.jpg',
  description:
    'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn-ui/ui',
  },
};

export type SiteConfig = typeof siteConfig;
