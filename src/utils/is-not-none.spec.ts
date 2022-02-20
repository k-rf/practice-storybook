import { isNotNone as isNotNone } from './is-not-none';

describe('isNotNone', () => {
  it.each<[string | undefined | null, boolean]>([
    ['', true],
    ['abc', true],
    [undefined, false],
    [null, false],
  ])('isNotNone(%s) => %s', (value, expected) => {
    expect(isNotNone(value)).toStrictEqual(expected);
  });
});
