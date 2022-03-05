import { Button as MuiButton, ButtonProps } from '@mui/material';
import { MUIStyledCommonProps } from '@mui/system';
import { forwardRef } from 'react';

import { Spinner } from '../Spinner';

type SxProps = Pick<ButtonProps, 'sx'> | Pick<MUIStyledCommonProps, 'sx'>;
type Props = Pick<
  ButtonProps,
  'children' | 'onClick' | 'variant' | 'disabled'
> &
  SxProps & { isLoading?: boolean };

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { isLoading, ...muiProps } = props;

  return (
    <MuiButton
      {...muiProps}
      startIcon={isLoading && <Spinner size={24} color='inherit' />}
      disabled={isLoading || props.disabled}
      ref={ref}
    />
  );
});

Button.displayName = 'Button';
