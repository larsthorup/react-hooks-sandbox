import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';

import { root } from '../root';

test('auth flow', async () => {
  const getLoggedOutStatus = () => getByText('Please');
  const getLoggedInStatus = () => getByText('Lars');
  const getLogoutButton = () => getByText('Logout');
  const getLoginButton = () => getByText('Login');
  const getSigninButton = () => getByText('Sign in');
  const getProfileButton = () => getByText('Profile');

  // When: rendered
  const { getByPlaceholderText, getByText } = render(root);

  // Then: is logged out
  expect(getLoggedOutStatus()).toBeInTheDocument();

  // When: navigate to sign in
  fireEvent.click(getSigninButton());

  // When: login
  const usernameInput = getByPlaceholderText('User name');
  const passwordInput = getByPlaceholderText('Password');
  fireEvent.change(usernameInput, { target: { value: 'Lars' } });
  fireEvent.change(passwordInput, { target: { value: 'whatever' } });
  fireEvent.click(getLoginButton());

  // Then: is logged in
  await wait(getProfileButton);
  expect(getProfileButton()).toBeInTheDocument();

  // When: navigate to profile
  fireEvent.click(getProfileButton());

  // Then: is on profile page
  expect(getLoggedInStatus()).toBeInTheDocument();
  expect(getLogoutButton()).toBeInTheDocument();

  // When: logout
  fireEvent.click(getLogoutButton());

  // Then: logged out
  expect(getLoggedOutStatus()).toBeInTheDocument();
});
