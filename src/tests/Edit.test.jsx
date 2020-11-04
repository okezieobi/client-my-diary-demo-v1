import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('Home dashboard page should render', () => {
  test('Renders diary content for large screens', () => {
    render(
      <MemoryRouter initialEntries={['/home/entry/edit']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Submit/)).toBeInTheDocument();
  });
});
