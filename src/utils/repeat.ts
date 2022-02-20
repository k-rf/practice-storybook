import { range } from '.';

export const repeat = (element: string, count: number) => {
  return [...range(0, count)].reduce((p) => (p += element), '');
};
