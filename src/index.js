import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import configureStore from './store';

/*const preloadedState = {
  schedules: [
    {
      id: 0,
      name: 'Prabhash',
      status: 'SCHEDULED',
    },
  ],
};

let store = configureStore(preloadedState);*/
let store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

registerServiceWorker();
