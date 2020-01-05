import React from 'react';
import { Provider } from 'react-redux';

import { App } from './view/App';
import { configureStore } from './lib/redux';
import { slices } from './state';

const store = configureStore({ slices });

export const root = (
  <Provider store={store}>
    <App />
  </Provider>
);
