import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';
import { configureStore } from './lib/redux';
import { slices } from './state';

import './index.css';

const store = configureStore({ slices });

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(rootComponent, document.getElementById('root'));

