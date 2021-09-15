import { createBrowserHistory } from 'history';
import queryString from 'query-string';
import * as R from 'ramda';

import { createActionCreator, stringify } from './redux-history-util';

const history = createBrowserHistory();

// Actions and reducers

const actions = {
  historyChange: createActionCreator('historyChange'),
  historyPush: createActionCreator('historyPush'),
  historyReplace: createActionCreator('historyReplace')
};

const initialState = {
  hash: {},
  pathname: '/',
  search: {}
};

const reducers = {
  historyChange: (state, { payload: { location: { hash, pathname, search } } }) => {
    const location = {
      hash: queryString.parse(hash),
      pathname,
      search: queryString.parse(search)
    };
    if (R.equals(state, location)) {
      return state;
    } else {
      return R.mergeRight(state, location);
    }
  },
};

const reducer = (state, action) => {
  const reducerForAction = reducers[action.type] || R.identity;
  return reducerForAction(state || initialState, action);
};

// Middleware

const handlers = {
  historyPush: (state, { payload: location }) => R.equals(state, location) || history.push(stringify(location)),
  historyReplace: (state, { payload: location }) => R.equals(state, location) || history.replace(stringify(location))
};

const middleware = slice => store => next => action => {
  const { [slice]: state } = store.getState();
  const defaultHandler = (_, action) => next(action);
  const handler = handlers[action.type] || defaultHandler;
  handler(state, action);
};

// Listener

function listen(store) {
  const unlisten = history.listen(({ location }) => {
    store.dispatch(actions.historyChange({ location }));
  });
  store.dispatch(actions.historyChange({ location: history.location })); // Note: initial location
  return { unlisten };
}

export function close({ unlisten }) {
  unlisten();
}

export default {
  actions,
  close,
  listen,
  middleware,
  reducer
}
