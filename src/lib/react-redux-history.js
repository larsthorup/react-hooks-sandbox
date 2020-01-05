import { useSelector } from 'react-redux';

export function useRoutes (routes, slice) {
  const pathname = useSelector(state => state[slice].pathname);
  return routes[pathname];
}
