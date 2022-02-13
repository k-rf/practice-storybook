import type { MouseEventHandler } from 'react';
import type { UseFormReturn } from 'react-hook-form';

import { Button } from '../Elements/Button';
import { TextField } from '../Elements/Field/TextField';

import { Form } from '.';

type FormValues = {
  firstName: string;
  familyName: string;
};

type HandleSubmit = (
  methods: UseFormReturn<FormValues>
) => MouseEventHandler<HTMLButtonElement>;

type Props = {
  onSubmit?: (value: FormValues) => Promise<void>;
};

export const PostForm = (props: Props) => {
  const handleSubmit: HandleSubmit = (methods) => (e) =>
    methods.handleSubmit(async (v) => {
      methods.reset({ familyName: '', firstName: '' });
      props.onSubmit && (await props.onSubmit(v));
    })(e);

  return (
    <Form<FormValues>>
      {(methods) => (
        <>
          <TextField
            label='Family'
            registration={methods.register('familyName')}
            data-testid='test-family-name-field'
          />
          <TextField
            label='First'
            registration={methods.register('firstName')}
            data-testid='test-first-name-field'
          />
          <Button variant='contained' onClick={handleSubmit(methods)}>
            送信
          </Button>
        </>
      )}
    </Form>
  );
};
