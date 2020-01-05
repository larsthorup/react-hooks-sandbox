import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from '../lib/react-redux-history';

import { signingOut } from '../saga/auth';

function LoggedIn({ user }) {
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.preventDefault();
    dispatch(signingOut());
  };
  return (
    <p>{user.name}<button onClick={onClick}>Logout</button></p>
  )
}

function NotLoggedIn() {
  return (
    <p>Not logged in</p>
  );
}

export function Profile() {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const profile = user ? <LoggedIn user={user} /> : <NotLoggedIn />;
  return (
    <div className="Profile">
      {profile}
      <button onClick={navigate('/')}>Home</button>
    </div>
  );
}
