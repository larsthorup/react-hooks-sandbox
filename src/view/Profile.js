import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { signingOut } from '../saga/auth';
import { location } from '../state';

const { actions: { historyPush } } = location;

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
  const user = useSelector(state => state.auth.user);
  const profile = user ? <LoggedIn user={user} /> : <NotLoggedIn />;
  const dispatch = useDispatch();
  const navigate = pathname => e => { // ToDo: useNavigate
    e.preventDefault();
    dispatch(historyPush({ pathname }));
  };
  return (
    <div className="Profile">
      {profile}
      <button onClick={navigate('/')}>Home</button>
    </div>
  );
}
