import { useDispatch, useSelector } from 'react-redux';
import ReduxHistory from './redux-history';

const {
  actions: { historyPush, historyReplace }
} = ReduxHistory;

export function useRoutes (routes, slice) {
  const pathname = useSelector(state => state[slice].pathname);
  return routes[pathname];
}

export function useNavigate () {
  const dispatch = useDispatch();
  return (pathname, { replace } = {}) => e => {
    e.preventDefault();
    const action = replace ? historyReplace : historyPush;
    dispatch(action({ pathname }));
  };
}
