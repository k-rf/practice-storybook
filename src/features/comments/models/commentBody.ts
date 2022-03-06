import { z } from 'zod';

import { ValueObject } from '~/utils/value-object';

export class CommentBody extends ValueObject<string, 'CommentBody'> {
  constructor(value: string) {
    super(z.string().min(1).max(200).parse(value));
  }
}
