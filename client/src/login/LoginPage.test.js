import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders login page', () => {
  render(<LoginPage />);
  const title = screen.getByText(/FencePOS/i);
  expect(title).toBeInTheDocument();
}