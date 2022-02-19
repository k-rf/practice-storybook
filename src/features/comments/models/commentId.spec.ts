import { CommentId } from './commentId';

describe('CommentId', () => {
  it.each<[CommentId, CommentId, boolean]>([
    [new CommentId('abc'), new CommentId('abc'), true],
    [new CommentId('abc'), new CommentId('xyz'), false],
  ])('equals メソッド', (a, b, expected) => {
    expect(a.equals(b)).toStrictEqual(expected);
  });
});
