import { CompletedChartDrawer } from '@/app/(app)/bucket_memo/_components';
import { BucketlistAccordion } from '@/app/(app)/bucket_memo/_components/bucketlist-accordion/bucketlist-accordion';
import { CreateBucketMemoDrawer } from '@/app/(app)/bucket_memo/_components/create-bucket-memo-drawer/create-bucket-memo-drawer';
import { createBucketListMock } from '@/models/src/bucketlist/__mocks__';

export default function BucketMemo() {
  const mocklist = createBucketListMock();

  return (
    <div className="w-full">
      {/* 達成度チャート */}
      <div className="flex justify-between border-b p-3 font-bold items-center">
        <div className="flex items-center gap-2">
          <p className="font-bold">BucketList</p>
        </div>
        <CompletedChartDrawer list={mocklist} />
      </div>

      {/* リスト */}
      <div>
        <BucketlistAccordion bucketlist={mocklist} />
      </div>

      {/* リスト新規作成 */}
      <CreateBucketMemoDrawer />
    </div>
  );
}
