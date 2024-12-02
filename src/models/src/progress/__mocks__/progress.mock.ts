import { faker } from '@faker-js/faker';

export const createProgressMock = (
  overrides: Partial<Progress> = {},
): Progress => {
  const base: Progress = {
    id: faker.string.uuid(),
    user_id: faker.string.uuid(),
    list_id: faker.string.uuid(),
    content: faker.company.name(),
    created: '2024/01/01',
  };
  return {
    ...base,
    ...overrides,
  };
};

export const createProgressMocks = (): Progress[] => {
  const list: Progress[] = [
    createProgressMock(),
    createProgressMock(),
    createProgressMock(),
    createProgressMock(),
  ];
  return list;
};
