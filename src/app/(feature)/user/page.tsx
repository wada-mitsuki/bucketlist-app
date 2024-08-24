import { Heart, Share } from 'lucide-react';

import BucketList from '@/app/(feature)/list/page';
import { Avatar } from '@/components/ui-parts';
import { createBucketListMock } from '@/models/src/bucketlist/__mocks__';

const tweets = [
  {
    id: 1,
    content: 'This is my first tweet!',
    timestamp: '2h ago',
    likes: 34,
    retweets: 12,
    replies: 5,
  },
  {
    id: 2,
    content: 'Loving the new features in Next.js!',
    timestamp: '4h ago',
    likes: 45,
    retweets: 18,
    replies: 7,
  },
];

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

      <div className="mt-4">
        {mocklist.map((list) => (
          <div key={list.id} className="border-b border-gray-300 py-4">
            <div className="flex items-center">
              <Avatar image={'https://github.com/shadcn.png'} />
              <div>
                <h2 className="font-bold">John Doe</h2>
                <p className="text-gray-600 text-sm">{list.created}</p>
              </div>
            </div>
            <p className="mt-2 text-gray-800">{list.content}</p>
            <div className="flex items-center space-x-4 mt-3 text-gray-500">
              <button className="flex items-center space-x-1 hover:text-red-500">
                <Heart className="w-4 h-4" />
                <span>{list.likes}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-500">
                <Share className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
