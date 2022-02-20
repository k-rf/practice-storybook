import { range } from '.';

describe('range', () => {
  it.each<[number, number, Array<number>]>([
    [1, 1, []],
    [1, 5, [1, 2, 3, 4]],
  ])('Accepted: range(%d, %d) => %s', (a, b, expected) => {
    expect([...range(a, b)]).toStrictEqual(expected);
  });

  it.each<[number, number]>([[4, 2]])('Rejected: range(%d, %d)', (a, b) => {
    expect(() => [...range(a, b)]).toThrow();
  });
});
