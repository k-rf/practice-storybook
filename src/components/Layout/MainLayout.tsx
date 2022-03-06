import { styled } from '@mui/material';

import { useAuth } from '~/features/auth';

import { Head } from '../Head';
import { HeaderWithLogout } from '../Header';

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Body = styled('div')(({ theme }) => {
  return {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  };
});

export const MainLayout = (props: Props) => {
  const { user, logout, isLoggingOut } = useAuth();

  return (
    <>
      <Head title={props.title} />
      <HeaderWithLogout
        isLogin={!!user}
        isLoading={isLoggingOut}
        onLogout={() => user && logout({ email: user.email })}
      />
      <Body>{props.children}</Body>
    </>
  );
};
