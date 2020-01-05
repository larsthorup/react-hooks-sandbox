import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import { signingIn } from '../saga/auth';

const initialState = {
  password: '',
  username: ''
};

function reducer (state, { field, value }) {
  return {
    ...state,
    [field]: value
  };
}

export function LoginForm() {
  const dispatch = useDispatch();
  const [state, localDispatch] = useReducer(reducer, initialState);
  const { password, username } = state;
  const onChange = (e) => localDispatch({ field: e.target.name, value: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signingIn({ password, username }));
  };
  return (
    <form className="LoginForm" onSubmit={onSubmit}>
      <input name="username" placeholder="User name" value={username} onChange={onChange}/><br/>
      <input name="password" placeholder="Password" value={password} onChange={onChange} type="password"/><br/>
      <button type="submit">Login</button>
    </form>
  );
}
