import React from 'react';
import { render } from '@testing-library/react';

import { root } from './root';

test('renders login page', () => {
  const { getByText } = render(root);
  const loginElement = getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();
});
