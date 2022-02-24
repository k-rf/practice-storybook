import { Comment } from './comment';
import { CommentId } from './commentId';

describe('Comment', () => {
  it.each([Comment.of()])('of メソッド', (comment) => {
    expect(comment).toBeDefined();
  });

  it.each<[Comment, Comment, boolean]>(
    (() => {
      const id1 = new CommentId();
      const id2 = new CommentId();

      return [
        [Comment.of({ id: id1 }), Comment.of({ id: id1 }), true],
        [Comment.of({ id: id1 }), Comment.of({ id: id2 }), false],
      ];
    })()
  )('equals メソッド', (a, b, expected) => {
    expect(a.equals(b)).toStrictEqual(expected);
  });
});
