import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateRangeAPOD from '../DateRangeAPOD';

// Mock the component that uses the environment variables
jest.mock('../../../components/Navbar.jsx', () => () => <div>Mocked NavBar</div>);

// Mock the environment variable
const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules(); // Clear the module cache
  process.env = { ...OLD_ENV, VITE_NASA_API_KEY: 'YOUR_MOCKED_API_KEY' };
});

afterEach(() => {
  process.env = OLD_ENV; // Restore old environment variables
});

// Mock the API response
const mockApods = [
  { title: 'Mock APOD 1', date: '2024-05-01', url: 'https://mockurl1.com' },
  { title: 'Mock APOD 2', date: '2024-05-02', url: 'https://mockurl2.com' },
];

// Mock the global fetch function
global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve(mockApods),
});

describe('DateRangeAPOD component', () => {
  it('renders properly', async () => {
    render(<DateRangeAPOD />);
        
    // Wait for the text to appear in the DOM
    await waitFor(() => {
      expect(screen.getByText(/Choose Your/i)).toBeInTheDocument();
      expect(screen.getByText(/APOD/i)).toBeInTheDocument();
      expect(screen.getByText(/Date Range/i)).toBeInTheDocument();
    });
  });

//   it('fetches APODs and renders them properly', async () => {
//     const startDate = new Date('2024-05-01');
//     const endDate = new Date('2024-05-02');
//     render(<DateRangeAPOD />);
    
//     // Wait for the API call to be made and data to be rendered
//     await waitFor(() => {
//       expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining(`start_date=${startDate.toISOString().split("T")[0]}&end_date=${endDate.toISOString().split("T")[0]}`));
//       expect(screen.getAllByRole('img')).toHaveLength(mockApods.length);
//     });
//   });
});
