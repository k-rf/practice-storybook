import { MouseEventHandler } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../Elements/Button';
import { TextField } from '../Elements/Field/TextField';

type FormValues = {
  firstName: string;
  familyName: string;
};

type Props = {
  onSubmit?: (value: FormValues) => Promise<void>;
};

export const PostForm = (props: Props) => {
  const methods = useForm<FormValues>();

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) =>
    methods.handleSubmit(async (v) => {
      methods.reset({ familyName: '', firstName: '' });
      props.onSubmit && (await props.onSubmit(v));
    })(e);

  return (
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
      <Button variant='contained' onClick={handleSubmit}>
        送信
      </Button>
    </>
  );
};
