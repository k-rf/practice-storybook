import { Box, BoxProps } from '@mui/material';
import { z } from 'zod';

import { Button } from '~/components/Elements/Button';
import { TextField } from '~/components/Elements/Field';
import { Form, HandleSubmit } from '~/components/Form';

type FormValues = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().email('メールアドレスを入力してください'),
  password: z.string().nonempty('パスワードを入力してください'),
});

type LoginFormProps = {
  onSuccess?: () => void;
};

export const LoginForm = (props: LoginFormProps) => {
  const handleSubmit: HandleSubmit<FormValues> = (methods) => (e) => {
    const isValid = methods.formState.isValid;

    return methods.handleSubmit(async (v) => {
      console.log(v, 'これ使って認証する');
      isValid && methods.reset();
      props.onSuccess && (await props.onSuccess());
    })(e);
  };

  const fieldBoxProps: BoxProps = {
    mb: (theme) => theme.spacing(2),
  };

  return (
    <Form<FormValues>
      options={{ mode: 'onBlur', criteriaMode: 'all' }}
      schema={schema}
    >
      {(methods) => {
        const { email: emailError, password: passwordError } =
          methods.formState.errors;
        const emailField = methods.getFieldState('email');
        const passwordField = methods.getFieldState('password');

        return (
          <Box width={(theme) => theme.spacing(40)}>
            <Box {...fieldBoxProps}>
              <TextField
                id='login-form-mail-address-field'
                type='email'
                label='メールアドレス'
                size='small'
                fullWidth
                error={emailField.invalid}
                helperText={emailError?.message || ' '}
                registration={methods.register('email')}
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
                error={passwordField.invalid}
                helperText={passwordError?.message || ' '}
                registration={methods.register('password')}
                data-testid={'test-password-field'}
              />
            </Box>
            <Box display='flex' justifyContent='center'>
              <Button
                variant='contained'
                disabled={!methods.formState.isValid}
                onClick={handleSubmit(methods)}
              >
                ログイン
              </Button>
            </Box>
          </Box>
        );
      }}
    </Form>
  );
};
