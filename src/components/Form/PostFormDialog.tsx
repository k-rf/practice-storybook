import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  styled,
} from '@mui/material';
import { MouseEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../Elements/Button';
import { TextField } from '../Elements/Field';

type FormValues = {
  firstName: string;
  familyName: string;
};

type Props = {
  onSubmit?: (value: FormValues) => Promise<void>;
};

export const PostFormDialog = (props: Props) => {
  const [open, setOpen] = useState(false);
  const methods = useForm<FormValues>();

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) =>
    methods.handleSubmit(async (value) => {
      handleClose(e, 'escapeKeyDown');
      props.onSubmit && props.onSubmit(value);
    })(e);

  const handleClose: Required<DialogProps>['onClose'] = (_e, reason) => {
    switch (reason) {
      case 'escapeKeyDown': {
        setOpen(false);
      }
    }
  };

  return (
    <>
      <Button onClick={() => setOpen((old) => !old)}>開く</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>フォーム</DialogTitle>
        <StyledDialogContent>
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
        </StyledDialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>送信</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const StyledDialogContent = styled(DialogContent)(({ theme }) => {
  return {
    '&.MuiDialogContent-root': {
      paddingTop: theme.spacing(1),
    },
  };
});
