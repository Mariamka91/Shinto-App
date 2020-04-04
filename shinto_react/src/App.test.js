import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome to todoloo header', () => {
  const { getByText } = render(<App />);
  const headerElem = getByText(/welcome to todoloo/i);
  expect(headerElem).toBeInTheDocument();
});
