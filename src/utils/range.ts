import { z } from 'zod';

export function* range(first: number, last: number) {
  z.number().gte(first).parse(last);

  for (let i = first; i < last; i++) {
    yield i;
  }
}
