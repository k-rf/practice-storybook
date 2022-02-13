import { useForm, UseFormReturn } from 'react-hook-form';

type Props<TFormValues> = {
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>(
  props: Props<TFormValues>
) => {
  const methods = useForm<TFormValues>();

  return <form>{props.children(methods)}</form>;
};
