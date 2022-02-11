import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = Pick<
  TextFieldProps,
  'onChange' | 'label' | 'error' | 'fullWidth' | 'autoFocus'
> & { registration: Partial<UseFormRegisterReturn> };

export const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { registration, ...other } = props;

  return <MuiTextField {...other} ref={ref} {...registration} />;
});

TextField.displayName = 'TextField';
