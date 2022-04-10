import { configureStore } from '@reduxjs/toolkit';

import { reducer as counterReducer } from '~/features/counter';
import { pokemonApi } from '~/features/pokemon';

import { setupListeners } from './rtk-query';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
