import {
  boolean,
  fallback,
  nonEmpty,
  number,
  object,
  pipe,
  string,
} from 'valibot';

export const bucketListFormSchema = object({
  id: fallback(string(), ''),
  title: pipe(string(), nonEmpty('必須項目だよ！')),
  location: fallback(string(), ''),
  date: fallback(string(), ''),
  budget: fallback(number(), 0),
  public: fallback(boolean(), true),
  // tags: pipe(string(), nonEmpty('タグを入力してください')),
  memo: fallback(string(), ''),
});
