import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

import { TextEncoder, TextDecoder } from 'util';
import * as test from "node:test";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

test('renders menu cards for books and movies', () => {
  render(<App />);
  const booksHeader = screen.getByText(/Books/i);
  const moviesHeader = screen.getByText(/Movies/i);
  expect(booksHeader).toBeInTheDocument();
  expect(moviesHeader).toBeInTheDocument();
});