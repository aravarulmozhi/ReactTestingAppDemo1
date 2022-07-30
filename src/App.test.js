import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-react-test-text');
  expect(linkElement).toBeInTheDocument();
});

test('checking URL Link',()=>{
  render(<App/>)
  const linkElement =screen.getByTestId('learn-react-test-link');
  expect(linkElement.href).toContain('www.google2.com')
})