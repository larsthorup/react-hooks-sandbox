import {combineReducers, createStore} from 'redux';
import * as R from 'ramda';

export function configureStore ({ slices }) {
  const reducers = R.mapObjIndexed(slice => slice.reducer, slices);
  const rootReducer = combineReducers(reducers);
  return createStore(rootReducer);
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
  const slice = { actions, reducer };
  return slice;
}
