import { Button as MuiButton, ButtonProps } from '@mui/material';
import { MUIStyledCommonProps } from '@mui/system';
import { forwardRef } from 'react';

type SxProps = Pick<ButtonProps, 'sx'> | Pick<MUIStyledCommonProps, 'sx'>;
type Props = Pick<
  ButtonProps,
  'children' | 'onClick' | 'variant' | 'disabled'
> &
  SxProps;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <MuiButton {...props} ref={ref} />;
});

Button.displayName = 'Button';
