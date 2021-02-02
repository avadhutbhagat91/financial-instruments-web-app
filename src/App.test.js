import { render, screen } from '@testing-library/react';
import App from './App';

test('renders financial instruments app', () => {
  render(<App />);
  const headerElement = screen.getByText('Financial Instruments Assignment');
  expect(headerElement).toBeInTheDocument();
});