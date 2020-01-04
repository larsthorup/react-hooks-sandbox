// Note: simplified redux toolkit - without immer

import * as R from 'ramda';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

export function configureStore ({ slices }) {
  const reducers = R.mapObjIndexed(slice => slice.reducer, slices);
  const rootReducer = combineReducers(reducers);
  const initialState = R.mapObjIndexed(R.always(null), slices);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = composeEnhancers(
    applyMiddleware(ReduxThunk)
  );
  return createStore(rootReducer, initialState, middleware);
}

export function createSlice ({ initialState, reducers}) {
  const actions = R.mapObjIndexed((_, type) => {
    const actionCreator = payload => ({ payload, type });
    actionCreator.type = type;
    actionCreator.toString = () => type;
    actionCreator.displayName = type;
    return actionCreator;
  }, reducers);
  const reducer = (state, action) => {
    return state ? (reducers[action.type] || R.identity)(state, action) : initialState;
  };
  return { actions, reducer };
}
