import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';  // Correct path to App.jsx

test('renders NavBar', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const navElement = screen.getByText(/nav item text/i); // Replace with actual NavBar text
  expect(navElement).toBeInTheDocument();
});
