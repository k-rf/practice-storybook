export const isNotNone = (value?: string | undefined | null): boolean => {
  return !(value === undefined || value === null);
};
