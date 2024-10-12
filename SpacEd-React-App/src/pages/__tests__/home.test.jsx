import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home'; 

test('renders home page with essential elements', () => {
  const { getByText, getByRole, getAllByText } = render(
    <Router>
      <Home />
    </Router>
  );

  // Test Navbar
  expect(getByRole('navigation')).toBeInTheDocument();

  // Test sections
  expect(getByText(/ Astronomy Picture of the Day/)).toBeInTheDocument();
  expect(getByText(/EPIC : Earth Imaginary Gallery/)).toBeInTheDocument();
  const marsRoverPhotos = getAllByText(/Mars Rover Photos/);
  expect(marsRoverPhotos.length).toBeGreaterThan(0);

  // Test links
  expect(getByText(/View more/)).toBeInTheDocument(); // APOD
  const readMore = getAllByText(/Read more/); // EPIC // Mars Rover Photos
  expect(readMore.length).toBeGreaterThan(0);
});
