import { useParams } from 'next/navigation';

import QrCodeGenerator from '@/app/(app)/(profile)/_components/qr-code-generator';
import BucketList from '@/app/(app)/(top)/page';
import { Button } from '@/components/shadcn-ui/ui/button';
import { Avatar } from '@/components/ui-parts';

export default function UserProfile() {
  return (
    <div className="w-full">
      <div className="p-4 pb-0">
        <div className="flex items-center gap-2">
          <Avatar image={'https://github.com/shadcn.png'} style="w-16 h-16" />

          <div className="">
            <p className="text-2xl font-bold">John Doe</p>
            <p className="text-gray-600">@johndoe</p>
          </div>
        </div>
        {/* WIP */}
        {/* <Button className="ml-auto h-7 w-full">Follow</Button> */}

        <div className="flex flex-col gap-4 mt-4 border-gray-300 pb-4">
          <p className="text-gray-800">
            Just a regular guy who loves coding and coffee. #JavaScript #NextJS
          </p>
          <div className="w-full flex flex-col gap-2">
            <Button className="h-8">お気に入りユーザに登録</Button>
            <QrCodeGenerator value="https://github.com/shadcn.png" />
          </div>
        </div>
      </div>

      <BucketList />
    </div>
  );
}
