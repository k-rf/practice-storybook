import { Route, Routes } from 'react-router-dom';

import { Head } from '~/components/Head';

export const CommentsRoutes = () => {
  return (
    <Routes>
      <Route
        path=''
        element={
          <>
            <Head title='Comments' />
            Comments!
          </>
        }
      />
    </Routes>
  );
};
