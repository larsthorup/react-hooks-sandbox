import { slices } from "../state";

const { auth: { actions: { signin } } } = slices;

export function signingIn () {
  return async function (dispatch) {
    setTimeout(() => {
      const response = {user: {name: 'Dr. Anonymous'}};
      dispatch(signin(response));
    }, 500); // Note: simulating slow fetch
  };
}
