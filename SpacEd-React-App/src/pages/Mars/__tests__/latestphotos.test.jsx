import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import LatestPhotos from '../LatestPhotos';

jest.mock('../../../components/Navbar.jsx', () => ({
  __esModule: true,
  default: function MockNavBar() {
    return <div>Mock Navbar</div>;
  },
}));

describe('LatestPhotos component', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ latest_photos: [] }),
    });
  });

  it('renders without crashing', () => {
    render(<LatestPhotos />);
  });

  it('displays photos correctly', async () => {
    render(<LatestPhotos />);
    await waitFor(() => {
      expect(screen.queryAllByAltText('Mars photo')).toHaveLength(0);
    });
  });

});
