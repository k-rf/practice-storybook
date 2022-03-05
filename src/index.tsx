import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { NODE_ENV } from './configs';
import { worker } from './mocks/browser';
import { reportWebVitals } from './reportWebVitals';

if (NODE_ENV === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
