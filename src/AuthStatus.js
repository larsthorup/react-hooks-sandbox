import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { sagas } from './saga';
import { slices } from './state';

const { auth: { signingIn } } = sagas;
const { auth: { actions: { signout } } } = slices;

function LoggedIn({ user }) {
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.preventDefault();
    dispatch(signout());
  };
  return (
    <p>{user.name} - <button onClick={onClick}>Logout</button></p>
  )
}

function NotLoggedIn() {
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.preventDefault();
    dispatch(signingIn());
  };
  return (
    <p>Please <button onClick={onClick}>Login</button></p>
  );
}

export function AuthStatus() {
  const user = useSelector(state => state.auth.user);
  const status = user ? <LoggedIn user={user} /> : <NotLoggedIn />;
  return (
    <div className="AuthStatus">
      {status}
    </div>
  );
}
