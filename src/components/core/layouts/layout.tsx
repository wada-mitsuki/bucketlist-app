import { Header } from '@/components/core/header/header';
import { Sidebar } from '@/components/core/sidebar/sidebar';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// PJに沿ったレイアウト
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="inset-y-0 hidden w-60 flex-col bg-background sm:flex">
        <Sidebar />
      </aside>

      {/* メインコンテンツ */}
      <div className="flex flex-col grow">
        {/* ヘッダー */}
        <div className="sticky top-0 z-30 h-14 items-center bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent">
          <Header />
        </div>

        {/* メインエリア */}
        <main className="grid  items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2 bg-blue-800">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8">
            TODO
            {/* 省略 */}
          </div>
        </main>
      </div>
    </div>
  );
};
