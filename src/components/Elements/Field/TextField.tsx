import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = Pick<
  TextFieldProps,
  'onChange' | 'label' | 'error' | 'fullWidth' | 'autoFocus'
> & { registration: Partial<UseFormRegisterReturn> };

export const TextField = (props: Props) => {
  const { registration, ...others } = props;

  return <MuiTextField {...others} {...registration} />;
};
