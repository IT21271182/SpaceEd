import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Mars from '../Mars';

describe('Mars component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Mars />
      </BrowserRouter>
    );
  });

  it('displays the select options and search button', () => {
    render(
      <BrowserRouter>
        <Mars />
      </BrowserRouter>
    );
    expect(screen.getByText('Select Rover')).toBeTruthy(); // Update to toBeTruthy()
    expect(screen.getByText('Select Camera')).toBeTruthy(); // Update to toBeTruthy()
    expect(screen.getByText('Search')).toBeTruthy(); // Update to toBeTruthy()
  });
});
