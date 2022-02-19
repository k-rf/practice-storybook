import { CommentBody } from './commentBody';
import { CommentId } from './commentId';

type Props = {
  id: CommentId;
  body: CommentBody;
};

export class Comment {
  readonly id: CommentId;
  readonly body: CommentBody;

  constructor(props: Props) {
    this.id = props.id;
    this.body = props.body;
  }

  static of(propsOverridden?: Partial<Props>): Comment {
    return new Comment({
      id: new CommentId('default'),
      body: new CommentBody('default'),
      ...propsOverridden,
    });
  }

  equals(that: Comment): boolean {
    return this.id.equals(that.id);
  }
}
