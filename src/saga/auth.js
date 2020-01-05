import { slices } from "../state";

const { auth: { actions: { signin } } } = slices;

export function signingIn ({ password, username }) {
  return async function (dispatch) {
    setTimeout(() => {
      const response = { user: { name: username} };
      dispatch(signin(response));
    }, 500); // Note: simulating slow fetch
  };
}
