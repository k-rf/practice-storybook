import { ValueObject } from './value-object';

class TestValue extends ValueObject<string | number | Date, 'TestValue'> {}

describe('ValueObject', () => {
  it.each([
    [1, 1, true],
    [1, 2, false],
    ['a', 'a', true],
    ['a', 'b', false],
    [new Date(0), new Date(0), true],
    [new Date(0), new Date(1), false],
  ])('%s equals %s => %s', (a, b, expected) => {
    const valueA = new TestValue(a);
    const valueB = new TestValue(b);
    expect(valueA.equals(valueB)).toStrictEqual(expected);
  });
});
