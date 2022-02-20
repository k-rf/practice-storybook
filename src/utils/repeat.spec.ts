import { repeat } from './repeat';

describe('repeat', () => {
  it.each<[string, number, string]>([
    ['1', 1, '1'],
    ['1', 10, '1111111111'],
    ['Xx', 5, 'XxXxXxXxXx'],
  ])('should be accept', (element, count, expected) => {
    expect(repeat(element, count)).toStrictEqual(expected);
  });
});
