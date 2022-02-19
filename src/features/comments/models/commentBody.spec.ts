import { CommentBody } from './commentBody';

describe('CommentBody', () => {
  describe('constructor', () => {
    it.each(['abc'])('should be accepted', (args) => {
      expect(new CommentBody(args)).toBeDefined();
    });

    it.each([''])('should be rejected', (args) => {
      expect(() => new CommentBody(args)).toThrow();
    });
  });

  it.each<[CommentBody, CommentBody, boolean]>([
    [new CommentBody('abc'), new CommentBody('abc'), true],
    [new CommentBody('abc'), new CommentBody('xyz'), false],
  ])('equals メソッド', (a, b, expected) => {
    expect(a.equals(b)).toStrictEqual(expected);
  });
});
