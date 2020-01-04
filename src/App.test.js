import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';

import { root } from './root';

test('auth flow', async () => {
  let loginButton;
  let logoutButton;

  // When: initially
  const { getByText } = render(root);

  // Then: logged out
  const getLoginButton = () => getByText('Login');
  const getLogoutButton = () => getByText('Logout');
  loginButton = getLoginButton();
  expect(loginButton).toBeInTheDocument();

  // When: click login
  fireEvent.click(loginButton);

  // Then: logged in
  await wait(getLogoutButton);
  logoutButton = getLogoutButton();
  expect(loginButton).not.toBeInTheDocument();
  expect(logoutButton).toBeInTheDocument();

  // When click logout
  fireEvent.click(logoutButton);

  // Then: logged out
  // await wait(getLoginButton); // Note: logout is synchronous, so no reason to wait
  loginButton = getLoginButton();
  expect(loginButton).toBeInTheDocument();
  expect(logoutButton).not.toBeInTheDocument();
});
