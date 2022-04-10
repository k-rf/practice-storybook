import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/no-unresolved
import { registerSW } from 'virtual:pwa-register';

import { App } from './App';
// import { NODE_ENV } from './configs';
import { worker } from './mocks/browser';
import { reportWebVitals } from './reportWebVitals';

// バックエンドを用意していないので、一時的にプロダクションでも MSW を利用する。
// if (NODE_ENV === 'development') {
worker.start({ onUnhandledRequest: 'bypass' });
// }

const container = document.getElementById('root');

if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
registerSW();
