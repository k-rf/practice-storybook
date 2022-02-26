import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = Pick<
  TextFieldProps,
  | 'autoFocus'
  | 'className'
  | 'error'
  | 'fullWidth'
  | 'id'
  | 'InputLabelProps'
  | 'label'
  | 'onChange'
  | 'size'
  | 'type'
> & { registration: Partial<UseFormRegisterReturn> };

export const TextField = (props: Props) => {
  const { registration, InputLabelProps, ...others } = props;

  return (
    <MuiTextField
      {...others}
      {...registration}
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
    />
  );
};
