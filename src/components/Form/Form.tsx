import { zodResolver } from '@hookform/resolvers/zod';
import { MouseEventHandler } from 'react';
import { useForm, UseFormReturn, UseFormProps } from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

export type HandleSubmit<TFormValues> = (
  methods: UseFormReturn<TFormValues>
) => MouseEventHandler<HTMLButtonElement>;

type Props<TFormValues, Schema> = {
  options?: UseFormProps<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  schema?: Schema;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>(
  props: Props<TFormValues, Schema>
) => {
  const methods = useForm<TFormValues>({
    ...props.options,
    resolver: props.schema && zodResolver(props.schema),
  });

  return <form>{props.children(methods)}</form>;
};
