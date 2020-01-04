import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { slices } from './state';

const { auth: { actions: { signin, signout } } } = slices;

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
    dispatch(signin({user: {name: 'Dr. Anonymous'}}));
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
