export class CommentId {
  constructor(readonly value: string) {}

  equals(that: CommentId): boolean {
    return this.value === that.value;
  }
}
