import { Heart, Share } from 'lucide-react';

import BucketList from '@/app/(feature)/home/page';
import { Avatar } from '@/components/ui-parts';
import { createBucketListMock } from '@/models/src/bucketlist/__mocks__';

export default function UserProfile() {
  const mocklist = createBucketListMock();

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

        <div className="mt-4 border-gray-300 pb-4">
          <p className="text-gray-800">
            Just a regular guy who loves coding and coffee. #JavaScript #NextJS
          </p>
        </div>
      </div>

      <BucketList />
    </div>
  );
}
