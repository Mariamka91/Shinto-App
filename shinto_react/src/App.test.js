import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome to shinto header', () => {
  const { getByText } = render(<App />);
  const headerElem = getByText(/welcome to shinto/i);
  expect(headerElem).toBeInTheDocument();
});
