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
  isLoading?: boolean;
  onSubmit?: (value: FormValues) => Promise<void>;
};

export const LoginForm = (props: LoginFormProps) => {
  const handleSubmit: HandleSubmit<FormValues> = (methods) => (e) => {
    const isValid = methods.formState.isValid;

    return methods.handleSubmit(async (v) => {
      isValid && methods.reset();
      props.onSubmit && (await props.onSubmit(v));
    })(e);
  };

  const fieldBoxProps: BoxProps = {
    mb: (theme) => theme.spacing(2),
  };

  return (
    <Form<FormValues>
      options={{ mode: 'all', criteriaMode: 'all' }}
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
                isLoading={props.isLoading}
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
