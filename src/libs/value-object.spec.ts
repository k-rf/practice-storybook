import { ValueObject } from './value-object';

describe('ValueObject', () => {
  it.each([
    [1, 1, true],
    [1, 2, false],
    ['a', 'a', true],
    ['a', 'b', false],
    [new Date(0), new Date(0), true],
    [new Date(0), new Date(1), false],
  ])('%s equals %s => %s', (a, b, expected) => {
    const valueA = new ValueObject(a);
    const valueB = new ValueObject(b);
    expect(valueA.equals(valueB)).toStrictEqual(expected);
  });
});
