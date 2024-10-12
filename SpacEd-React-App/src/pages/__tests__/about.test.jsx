import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { BrowserRouter } from 'react-router-dom';
import About from '../About';

test('renders About component', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );

  // Check if the text content is rendered correctly
  const header = screen.getByRole('heading', { level: 1 });
  expect(header).toHaveTextContent(/About\s*SpacEd/i);

  expect(screen.getByText(/Our Mission/i)).toBeInTheDocument();
  expect(screen.getByText(/NASA APIs/i)).toBeInTheDocument();

  // Check if the link to explore is present
  const exploreLink = screen.getByRole('link', { name: /explore/i });
  expect(exploreLink).toBeInTheDocument();
  expect(exploreLink).toHaveAttribute('href', '/');
});
