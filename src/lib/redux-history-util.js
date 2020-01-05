import queryString from 'query-string';

export function stringify (location) {
  return {
    hash: queryString.stringify(location.hash),
    pathname: location.pathname,
    search: queryString.stringify(location.search)
  };
}

export function createActionCreator (type) {
  const actionCreator = payload => ({ payload, type });
  actionCreator.type = type;
  actionCreator.toString = () => type;
  actionCreator.displayName = type;
  return actionCreator;
}
