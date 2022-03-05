import { Box, BoxProps } from '@mui/material';

import { Button } from '~/components/Elements/Button';
import { TextField } from '~/components/Elements/Field';
import { Form } from '~/components/Form';

type FormValues = {
  email: string;
  password: string;
};

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = (props: RegisterFormProps) => {
  const fieldBoxProps: BoxProps = {
    mb: (theme) => theme.spacing(2),
  };

  return (
    <Form<FormValues>
      options={{ mode: 'all', reValidateMode: 'onChange', criteriaMode: 'all' }}
    >
      {(methods) => (
        <Box width={(theme) => theme.spacing(40)}>
          <Box {...fieldBoxProps}>
            <TextField
              type='email'
              label='メールアドレス'
              size='small'
              fullWidth
              error={methods.getFieldState('email').invalid}
              helperText={methods.getFieldState('email').error?.message || ' '}
              registration={methods.register('email', {
                required: 'メールアドレスを入力してください',
              })}
              data-testid={'test-email-field'}
            />
          </Box>
          <Box {...fieldBoxProps}>
            <TextField
              id='login-form-password-field'
              type='password'
              label='パスワード'
              size='small'
              fullWidth
              error={methods.getFieldState('password').invalid}
              helperText={
                methods.getFieldState('password').error?.message ||
                '半角英数記号を12文字以上入力してください'
              }
              registration={methods.register('password', {
                minLength: 12,
                required: 'パスワードを入力してください',
              })}
              data-testid={'test-password-field'}
            />
          </Box>
          <Box display='flex' justifyContent='flex-end'>
            <Button
              variant='contained'
              disabled={!methods.formState.isValid}
              onClick={props.onSuccess}
            >
              ログイン
            </Button>
          </Box>
        </Box>
      )}
    </Form>
  );
};
