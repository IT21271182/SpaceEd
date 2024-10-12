import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero'; 

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

test('renders Hero component with buttons', () => {
  const navigateMock = jest.fn();
  jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigateMock);

  const { getByText } = render(<Hero />);
  const getStartedButton = getByText('Get started');
  const loginButton = getByText('Log In');

  // Simulate clicks on buttons
  fireEvent.click(getStartedButton);
  fireEvent.click(loginButton);

  // Expect navigate to be called with correct paths
  expect(navigateMock).toHaveBeenCalledWith('/Register');
  expect(navigateMock).toHaveBeenCalledWith('/Login');
});
