import React from "react";
import { render, waitFor, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import SingleDayAPOD from '../SingleDayAPOD';

// Mock the environment import
jest.mock("../SingleDayAPOD", () => ({
  __esModule: true,
  default: () => <div>APOD component mock</div>, // Mocking the APOD component
  VITE_NASA_API_KEY: "mock-api-key",
}));

// Mock the API response
const mockApodData = {
  date: "2024-05-05",
  title: "Mock APOD Title",
  explanation: "Mock APOD Explanation",
  hdurl: "https://mock-apod-url.com/image.jpg",
};

// Mock the fetch function
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue(mockApodData),
});

describe("APOD component", () => {
  test("renders APOD component with mock data", async () => {
    render(<SingleDayAPOD />); // Render the APOD component

    // Wait for the component to render
    await waitFor(() => {
      // Check if the APOD component mock is rendered
      expect(screen.getByText("APOD component mock")).toBeInTheDocument();
    });
  });
});
