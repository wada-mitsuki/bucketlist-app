import { fallback, nonEmpty, object, pipe, string } from 'valibot';

export const progressFormSchema = object({
  id: fallback(string(), ''),
  user_id: fallback(string(), ''),
  list_id: fallback(string(), ''),
  content: pipe(string(), nonEmpty('必須項目だよ！')),
});
