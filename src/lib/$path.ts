const buildSuffix = (url?: {query?: Record<string, string>, hash?: string}) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!query && !hash) return '';
  const search = query ? `?${new URLSearchParams(query)}` : '';
  return `${search}${hash ? `#${hash}` : ''}`;
};

export const pagesPath = {
  "bucket_memo": {
    _slug: (slug: string[]) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/bucket_memo/[...slug]' as const, query: { slug }, hash: url?.hash, path: `/bucket_memo/${slug?.join('/')}${buildSuffix(url)}` })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/bucket_memo' as const, hash: url?.hash, path: `/bucket_memo${buildSuffix(url)}` })
  },
  "profile": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/profile/[id]' as const, query: { id }, hash: url?.hash, path: `/profile/${id}${buildSuffix(url)}` })
    }),
  },
  "search": {
    $url: (url?: { hash?: string }) => ({ pathname: '/search' as const, hash: url?.hash, path: `/search${buildSuffix(url)}` })
  },
  "top": {
    $url: (url?: { hash?: string }) => ({ pathname: '/top' as const, hash: url?.hash, path: `/top${buildSuffix(url)}` })
  },
  "login": {
    $url: (url?: { hash?: string }) => ({ pathname: '/login' as const, hash: url?.hash, path: `/login${buildSuffix(url)}` })
  }
};

export type PagesPath = typeof pagesPath;
