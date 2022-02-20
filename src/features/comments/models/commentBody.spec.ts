import { CommentBody } from './commentBody';

import { repeat } from '~/utils';

describe('CommentBody', () => {
  describe('constructor', () => {
    it.each(['abc', repeat('X', 200)])('Accepted: "%s"', (args) => {
      expect(new CommentBody(args)).toBeDefined();
    });

    it.each(['', repeat('X', 201)])('Rejected: "%s"', (args) => {
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
