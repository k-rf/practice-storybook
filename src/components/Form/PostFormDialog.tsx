import { Button } from '../Elements/Button';
import { TextField } from '../Elements/Field';

import { FormDialog, SubmitHandler } from '.';

type FormValues = {
  firstName: string;
  familyName: string;
};

type Props = {
  onSubmit?: (value: FormValues) => Promise<void>;
};

export const PostFormDialog = (props: Props) => {
  const handleSubmit: SubmitHandler<FormValues> = (methods) => (e) =>
    methods.handleSubmit(async (v) => {
      methods.reset({ familyName: '', firstName: '' });
      methods.setOpen(false);
      props.onSubmit && (await props.onSubmit(v));
    })(e);

  return (
    <FormDialog<FormValues>
      triggerButton={<Button>開く</Button>}
      closeType='backdropClick'
      title='フォーム'
      content={(methods) => (
        <>
          <TextField
            data-testid='test-first-name-field'
            registration={methods.register('firstName')}
            label='First Name'
          />
          <TextField
            data-testid='test-family-name-field'
            registration={methods.register('familyName')}
            label='Family Name'
          />
        </>
      )}
      submitButton={(methods) => (
        <Button variant='contained' onClick={handleSubmit(methods)}>
          送信
        </Button>
      )}
    />
  );
};
