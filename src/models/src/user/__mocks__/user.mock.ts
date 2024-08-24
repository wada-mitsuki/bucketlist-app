import { faker } from '@faker-js/faker';

import { User } from '@/models/src';

export const createUserMock = (overrides: Partial<User> = {}): User => {
  const base: User = {
    id: faker.string.uuid(),
    user_name: faker.finance.accountName(),
    profile_image_url: faker.finance.accountName(),
    verified: faker.datatype.boolean(),
  };
  return {
    ...base,
    ...overrides,
  };
};
