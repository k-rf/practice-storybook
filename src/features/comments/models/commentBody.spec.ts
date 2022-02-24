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
});
