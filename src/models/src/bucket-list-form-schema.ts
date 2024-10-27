import { boolean, date, nonEmpty, object, pipe, regex, string } from 'valibot';

export const bucketListFormSchema = object({
  title: pipe(string(), nonEmpty('必須項目だよ！')),
  location: string(),
  date: string(),
  budget: string(),
  public: boolean(),
  // tags: pipe(string(), nonEmpty('タグを入力してください')),
  memo: string(),
});
