import { faker } from '@faker-js/faker';

import { BucketListItem } from '@/models/src';
import { createUserMock } from '@/models/src/user/__mocks__';

export const createBucketlistitemMock = (
  overrides: Partial<BucketListItem> = {},
): BucketListItem => {
  const base: BucketListItem = {
    id: faker.string.uuid(),
    no: faker.string.numeric(),
    user_id: faker.string.uuid(),
    title: faker.company.name(),
    content: faker.company.name(),
    profile_image_url: faker.finance.accountName(),
    created: '2024-01-01',
    edited: '2024-01-02',
    likes: faker.number.int(),
    completed: faker.datatype.boolean(),
    opened: faker.datatype.boolean(),
    images: [faker.image.url()],
    location: faker.location.city(),
    date: '2024-01-02',
    memo: faker.lorem.sentence(),
    budget: 10000,
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
