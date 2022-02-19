import { z } from 'zod';

export class CommentBody {
  constructor(readonly value: string) {
    this.value = z.string().min(1).max(200).parse(value);
  }

  equals(that: CommentBody): boolean {
    return this.value === that.value;
  }
}
