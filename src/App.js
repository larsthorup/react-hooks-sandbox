import React from 'react';

import { AuthStatus } from './AuthStatus';

import './App.css';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthStatus />
      </header>
    </div>
  );
}
