import { v4 as uuidV4 } from 'uuid';
import { z } from 'zod';

import { ValueObject } from './value-object';

import { isNotNone } from '~/utils/is-not-none';

export class Uuid<T extends string> extends ValueObject<string, T> {
  constructor(value?: string) {
    super(isNotNone(value) ? z.string().uuid().parse(value) : uuidV4());
  }
}
