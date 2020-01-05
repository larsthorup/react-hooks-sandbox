import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';

import { root } from '../root';

test('auth flow', async () => {
  let loggedOutStatus;
  let loggedInStatus;
  let logoutButton;

  // When: rendered
  const { getByPlaceholderText, getByText } = render(root);

  // Then: is logged out
  const getLoggedOutStatus = () => getByText('Please Login');
  const getLogoutButton = () => getByText('Logout');
  loggedOutStatus = getLoggedOutStatus();
  expect(loggedOutStatus).toBeInTheDocument();

  // When: login
  const usernameInput = getByPlaceholderText('User name');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');
  fireEvent.change(usernameInput, { target: { value: 'Lars' } });
  fireEvent.change(passwordInput, { target: { value: 'whatever' } });
  fireEvent.click(loginButton);

  // Then: is logged in
  await wait(getLogoutButton);
  logoutButton = getLogoutButton();
  loggedInStatus = getByText('Lars');
  expect(loggedOutStatus).not.toBeInTheDocument();
  expect(loggedInStatus).toBeInTheDocument();
  expect(logoutButton).toBeInTheDocument();

  // When: logout
  fireEvent.click(logoutButton);

  // Then: logged out
  // await wait(getLoginButton); // Note: logout is synchronous, so no reason to wait
  loggedOutStatus = getLoggedOutStatus();
  expect(loggedOutStatus).toBeInTheDocument();
  expect(loggedInStatus).not.toBeInTheDocument();
  expect(logoutButton).not.toBeInTheDocument();
});
