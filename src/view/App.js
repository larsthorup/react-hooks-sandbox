import React from 'react';

import { AuthStatus } from './AuthStatus';
import { LoginForm } from "./LoginForm";

import './App.css';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthStatus />
        <LoginForm />
      </header>
    </div>
  );
}
