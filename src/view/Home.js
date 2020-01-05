import React from "react";
import { useSelector } from 'react-redux';

import { useNavigate } from '../lib/react-redux-history';

export function Home() {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const status = (loggedIn => {
    if (loggedIn) {
      return <p><button onClick={navigate('/profile')}>Profile</button></p>;
    } else {
      return <p>Please <button onClick={navigate('/signin', { replace: true })}>Sign in</button></p>;
    }
  })(!!user);
  return (
    <div className="Home">
      {status}
    </div>
  );
}
