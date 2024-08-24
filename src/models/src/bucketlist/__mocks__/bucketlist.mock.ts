import { faker } from '@faker-js/faker';

import { BucketListItem } from '@/models/src/bucketlist/bucketlist';
import { createUserMock } from '@/models/src/user/__mocks__';

export const createBucketlistitemMock = (
  overrides: Partial<BucketListItem> = {},
): BucketListItem => {
  const base: BucketListItem = {
    id: faker.string.uuid(),
    user: createUserMock(),
    content: faker.company.name(),
    profile_image_url: faker.finance.accountName(),
    created: '2024/01/01',
    likes: faker.finance.accountNumber(),
    completed: faker.datatype.boolean(),
  };
  return {
    ...base,
    ...overrides,
  };
};

export const createBucketListMock = (): BucketListItem[] => {
  const list: BucketListItem[] = [
    createBucketlistitemMock(),
    createBucketlistitemMock(),
    createBucketlistitemMock(),
    createBucketlistitemMock(),
    createBucketlistitemMock(),
  ];
  return list;
};
