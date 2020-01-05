// Note: simplified redux toolkit - without immer

import * as R from 'ramda';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

export function configureStore ({ middlewares, slices }) {
  const allSlices = {
    ...slices
  };
  const reducers = R.mapObjIndexed(slice => slice.reducer, allSlices);
  const rootReducer = combineReducers(reducers);
  const initialState = R.mapObjIndexed(R.always(null), allSlices);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = composeEnhancers.apply(null, middlewares.map(middleware => applyMiddleware(middleware)));
  const store = createStore(rootReducer, initialState, middleware);
  return store;
}

export function createActionCreator (type) {
  const actionCreator = payload => ({ payload, type });
  actionCreator.type = type;
  actionCreator.toString = () => type;
  actionCreator.displayName = type;
  return actionCreator;
}

export function createSlice ({ initialState, reducers}) {
  const actions = R.mapObjIndexed((_, type) => createActionCreator(type), reducers);
  const reducer = (state, action) => {
    return state ? (reducers[action.type] || R.identity)(state, action) : initialState;
  };
  return { actions, reducer };
}
