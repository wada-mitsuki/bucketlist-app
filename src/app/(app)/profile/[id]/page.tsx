import { BucketlistList } from '@/app/(app)/profile/_components/bucketlist-list/bucketlist-list';
import QrCodeGenerator from '@/app/(app)/profile/_components/qr-code-generator/qr-code-generator';
import { Button } from '@/components/shadcn-ui/ui/button';
import { Avatar } from '@/components/ui-parts';
import { createBucketListMock } from '@/models/src/bucketlist/__mocks__';

export default function UserProfile() {
  const mocklist = createBucketListMock();

  return (
    <div className="w-full">
      <div className="border-b">
        <div className="p-4 pb-0">
          <div className="flex items-center gap-2">
            <Avatar image={'https://github.com/shadcn.png'} style="w-16 h-16" />

            <div className="">
              <p className="text-2xl font-bold">John Doe</p>
              <p className="text-gray-600">@johndoe</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4 border-gray-300 pb-4">
            <p className="text-gray-800">
              Just a regular guy who loves coding and coffee. #JavaScript
              #NextJS
            </p>
            <div className="w-full flex flex-col gap-2">
              <Button className="h-8">お気に入りユーザに登録</Button>
              <QrCodeGenerator value="https://github.com/shadcn.png" />
            </div>
          </div>
        </div>
      </div>

      <BucketlistList bucketList={mocklist} />
    </div>
  );
}
