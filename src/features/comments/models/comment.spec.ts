import { Comment } from './comment';
import { CommentId } from './commentId';

describe('Comment', () => {
  it.each([Comment.of()])('of メソッド', (comment) => {
    expect(comment).toBeDefined();
  });

  it.each<[Comment, Comment, boolean]>([
    [
      Comment.of({ id: new CommentId('abc') }),
      Comment.of({ id: new CommentId('abc') }),
      true,
    ],
    [
      Comment.of({ id: new CommentId('abc') }),
      Comment.of({ id: new CommentId('xyz') }),
      false,
    ],
  ])('equals メソッド', (a, b, expected) => {
    expect(a.equals(b)).toStrictEqual(expected);
  });
});
