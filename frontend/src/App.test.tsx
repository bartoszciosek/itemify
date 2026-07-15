import { render, screen } from '@testing-library/react';
import * as React from 'react';
import App from './App';

import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
(global as unknown as { TextDecoder: typeof TextDecoder }).TextDecoder = TextDecoder;

test('renders menu cards for books and movies', () => {
  render(<App />);

  const booksHeader = screen.getByText(/Książki/i);
  const moviesHeader = screen.getByText(/Filmy/i);

  expect(booksHeader).toBeInTheDocument();
  expect(moviesHeader).toBeInTheDocument();
});