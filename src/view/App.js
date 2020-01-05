import React from 'react';
import { useSelector } from 'react-redux';

import { Home } from './Home';
import { LoginForm } from './LoginForm';
import { Profile } from './Profile'

import './App.css';

const routes = {
  '/': <Home />,
  '/signin': <LoginForm />,
  '/profile': <Profile />
};

export function App() {
  // ToDo: ReduxHistory.useRoutes
  const pathname = useSelector(state => state.location.pathname);
  const routeResult = routes[pathname];
  return (
    <div className="App">
      <header className="App-header">
        {routeResult}
      </header>
    </div>
  );
}
