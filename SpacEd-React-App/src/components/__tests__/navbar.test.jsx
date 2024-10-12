import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for custom matchers
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../Navbar';

test('renders navbar with essential elements', () => {
  const { getByText, getByRole } = render(
    <Router>
      <NavBar />
    </Router>
  );

  // Test logo and brand name
  expect(getByText(/SpacEd/)).toBeInTheDocument();

  // Test navigation links
  expect(getByText(/Home/)).toBeInTheDocument();
  expect(getByText(/APOD/)).toBeInTheDocument();
  expect(getByText(/Mars Rover Photos/)).toBeInTheDocument();
  expect(getByText(/Earth Imagine Gallery/)).toBeInTheDocument();

  // Test logout button
  expect(getByText(/Log Out/)).toBeInTheDocument();

  // Test navigation role
  expect(getByRole('navigation')).toBeInTheDocument();
});
