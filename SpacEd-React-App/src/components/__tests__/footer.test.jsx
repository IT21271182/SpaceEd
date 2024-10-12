import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for custom matchers
import Footer from '../Footer';

describe('Footer Component', () => {
  test('renders footer with copyright and links', () => {
    const { getByText, getByRole } = render(<Footer />);

    // Test copyright text
    expect(getByText(/© 2024/)).toBeInTheDocument();

    // Test company name link
    expect(getByText(/SpacEd™/)).toHaveAttribute('href', '/Home');

    // Test navigation links
    expect(getByText(/About/)).toHaveAttribute('href', '/About');
    expect(getByText(/Nasa APIs/)).toHaveAttribute('href', 'https://api.nasa.gov/');
    expect(getByText(/Contact/)).toHaveAttribute('href', 'https://github.com/IT21271182');

    // Test footer role
    expect(getByRole('contentinfo')).toBeInTheDocument();
  });
});
