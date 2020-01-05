import { auth, location } from '../state';

const { actions: { signin, signout } } = auth;
const { actions: { historyReplace } } = location;

export function signingIn ({ password, username }) {
  return async function (dispatch) {
    await new Promise(resolve => setTimeout(() => {
      const success = !!password;
      if (success) {
        const response = {user: {name: username}};
        dispatch(signin(response));
        dispatch(historyReplace({ pathname: '/' }));
      } else {
        alert('Please enter a password');
      }
      resolve();
    }, 500)); // Note: simulating slow fetch
  };
}

export function signingOut () {
  return async function (dispatch) {
    dispatch(signout());
    dispatch(historyReplace({ pathname: '/' }));
    return Promise.resolve();
  }
}
