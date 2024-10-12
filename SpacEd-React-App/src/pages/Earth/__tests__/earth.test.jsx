import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { BrowserRouter } from 'react-router-dom'; 
import Earth from '../Earth';
import '@testing-library/jest-dom';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(), // Mock useNavigate as a jest function
}));


describe('Earth component', () => {
  test('renders properly', async () => {
    render(
      <MemoryRouter> {/* Wrap Earth component in MemoryRouter */}
        <Earth />
      </MemoryRouter>
    );

    // Check if the main title is rendered
    expect(screen.getByText('Earth Imaging Gallery')).toBeInTheDocument();

    // Check if the "View Images" button is rendered
    expect(screen.getByText('View Images')).toBeInTheDocument();
  });

  
});
