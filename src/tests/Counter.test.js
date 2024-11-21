import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText("Counter")).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen. getByText("+");
  const count = screen.getByTestId("count");
  fireEvent.click(increment);
  expect(count).toHaveTextContent("1");
  fireEvent.click(increment);
  expect(count).toHaveTextContent("2");
  fireEvent.click(increment);
  expect(count).toHaveTextContent("3");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen. getByText("-");
  const count = screen.getByTestId("count");
  fireEvent.click(decrement);
  expect(count).toHaveTextContent("-1");
  fireEvent.click(decrement);
  expect(count).toHaveTextContent("-2");
  fireEvent.click(decrement);
  expect(count).toHaveTextContent("-3");
});
