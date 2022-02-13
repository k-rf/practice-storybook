import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  styled,
} from '@mui/material';
import React, { MouseEventHandler, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

import { Button } from '../Elements/Button';

type HandleClose = Required<DialogProps>['onClose'];

type SubmitMethods<TFormValues> = UseFormReturn<TFormValues> & {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SubmitHandler<TFormValues> = (
  methods: SubmitMethods<TFormValues>
) => MouseEventHandler<HTMLButtonElement>;

type Props<TFormValues> = {
  triggerButton: React.ReactElement;
  submitButton?: (methods: SubmitMethods<TFormValues>) => React.ReactElement;
  title: React.ReactNode;
  content: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  closeType?: 'backdropClick' | 'escapeKeyDown' | 'both';
};

export const FormDialog = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>(
  props: Props<TFormValues>
) => {
  const [open, setOpen] = useState(false);
  const methods = useForm<TFormValues>();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose: HandleClose = (_event, reason) => {
    switch (props.closeType) {
      case 'backdropClick':
        if (reason === 'backdropClick') {
          setOpen(false);
        }
        break;
      case 'escapeKeyDown': {
        if (reason === 'escapeKeyDown') {
          setOpen(false);
        }
        break;
      }
      case 'both':
        setOpen(false);
    }
  };

  return (
    <>
      {React.cloneElement(props.triggerButton, { onClick: handleOpen })}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <form>
          <StyledDialogContent>{props.content(methods)}</StyledDialogContent>
          <DialogActions>
            <Button variant='text' onClick={() => setOpen(false)}>
              閉じる
            </Button>
            {props.submitButton && props.submitButton({ ...methods, setOpen })}
          </DialogActions>
        </form>
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
