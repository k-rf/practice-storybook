import { v4 as uuidV4 } from 'uuid';

import { Uuid } from './uuid';

describe('Uuid', () => {
  describe('constructor', () => {
    it.each([uuidV4(), undefined])('Accepted: "%s"', (value) => {
      expect(new Uuid(value)).toBeDefined();
    });

    it.each(['', 'abc'])('Rejected: "%s"', (value) => {
      expect(() => new Uuid(value)).toThrow();
    });
  });
});
