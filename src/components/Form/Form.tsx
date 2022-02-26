import { MouseEventHandler } from 'react';
import { useForm, UseFormReturn, UseFormProps } from 'react-hook-form';

export type HandleSubmit<TFormValues> = (
  methods: UseFormReturn<TFormValues>
) => MouseEventHandler<HTMLButtonElement>;

type Props<TFormValues> = {
  options?: UseFormProps<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>(
  props: Props<TFormValues>
) => {
  const methods = useForm<TFormValues>({ ...props.options });

  return <form>{props.children(methods)}</form>;
};
