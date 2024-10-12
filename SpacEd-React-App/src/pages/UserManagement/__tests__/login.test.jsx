import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';
import '@testing-library/jest-dom';

// Mock useAuth hook
jest.mock('../../../context/authContext', () => ({
  useAuth: () => ({
    userLoggedIn: false, // or provide any value you want for userLoggedIn
  }),
}));

// Mock doSignInWithEmailAndPassword function
import * as auth from '../../../firebase/auth.js';
auth.doSignInWithEmailAndPassword = jest.fn().mockResolvedValue(null);

// Mock doSignInWithGoogle function
auth.doSignInWithGoogle = jest.fn().mockResolvedValue(null);

describe('Login Component', () => {
  test('renders the login form', () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    
    // Check if all necessary elements are rendered
    expect(getByLabelText('Your email')).toBeInTheDocument();
    expect(getByPlaceholderText('name@company.com')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByPlaceholderText('••••••••')).toBeInTheDocument();
    expect(getByText('Sign In')).toBeInTheDocument();
    expect(getByText("Don’t have an account yet?")).toBeInTheDocument();
    expect(getByText('Continue with Google')).toBeInTheDocument();
  });

  test('handles form submission', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const emailInput = getByLabelText('Your email');
    const passwordInput = getByLabelText('Password');
    const signInButton = getByText('Sign In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(signInButton);

    // Wait for the async signInWithEmailAndPassword function to be called
    await waitFor(() => {
      expect(auth.doSignInWithEmailAndPassword).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  test('handles Google sign in', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const googleSignInButton = getByText('Continue with Google');

    fireEvent.click(googleSignInButton);

    // Wait for the async signInWithGoogle function to be called
    await waitFor(() => {
      expect(auth.doSignInWithGoogle).toHaveBeenCalled();
    });
  });
});
