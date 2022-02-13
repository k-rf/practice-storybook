import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
};

export const Head = (props: Props) => {
  return (
    <Helmet
      title={props.title ? `${props.title} | Practice Storybook` : undefined}
      defaultTitle='Practice Storybook'
    >
      <meta name='description' content={props.description} />
    </Helmet>
  );
};
