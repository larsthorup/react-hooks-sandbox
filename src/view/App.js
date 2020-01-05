import React from 'react';

import { useRoutes } from '../lib/react-redux-history';

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
  const routeResult = useRoutes(routes, 'location');
  return (
    <div className="App">
      <header className="App-header">
        {routeResult}
      </header>
    </div>
  );
}
