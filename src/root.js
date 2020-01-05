import React from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import { App } from './view/App';
import { configureStore } from './lib/redux-slice';
import ReduxHistory from './lib/redux-history';
import * as slices from './state';

const middlewares = [
  ReduxThunk,
  ReduxHistory.middleware('location') // Note: match slices.location
];
const store = configureStore({ middlewares, slices });
ReduxHistory.listen(store);

export const root = (
  <Provider store={store}>
    <App />
  </Provider>
);
