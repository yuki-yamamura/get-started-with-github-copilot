import Counter from './';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// utility queries
function getDisplayValue(expectedValue: string) {
  return screen.getByRole('heading', { name: expectedValue });
}
function getPlusButton() {
  return screen.getByRole('button', { name: '+' });
}
function getMinusButton() {
  return screen.getByRole('button', { name: '-' });
}
function getResetButton() {
  return screen.getByRole('button', { name: 'Reset' });
}

describe('Counter', () => {
  describe('initialization', () => {
    test('renders the correct view', () => {
      render(<Counter />);

      expect(getDisplayValue('0')).toBeInTheDocument();
      expect(getPlusButton()).toBeInTheDocument();
      expect(getMinusButton()).toBeInTheDocument();
      expect(getResetButton()).toBeInTheDocument();
    });

    test('disables the - button and the reset button when the counter is 0', () => {
      // arrange
      render(<Counter />);
      const displayValue = getDisplayValue('0');
      const minusButton = getMinusButton();
      const resetButton = getResetButton();

      // assert
      expect(displayValue).toHaveTextContent('0');
      expect(minusButton).toBeDisabled();
      expect(resetButton).toBeDisabled();
    });
  });

  describe('interactions', () => {
    test('increments the counter when the + button is clicked', async () => {
      // arrange
      const user = userEvent.setup();
      render(<Counter />);
      const displayValue = getDisplayValue('0');
      const plusButton = screen.getByRole('button', { name: '+' });

      // act
      await user.click(plusButton);

      // assert
      expect(displayValue).toHaveTextContent('1');
    });

    test('decrements the counter when the - button is clicked', async () => {
      // arrange
      const user = userEvent.setup();
      render(<Counter />);
      const displayValue = getDisplayValue('0');

      // act
      await user.click(getPlusButton());
      await user.click(getMinusButton());

      // assert
      expect(displayValue).toHaveTextContent('0');
    });

    test('resets the counter when the Reset button is clicked', async () => {
      // arrange
      const user = userEvent.setup();
      render(<Counter />);
      const displayValue = getDisplayValue('0');
      const plusButton = getPlusButton();
      const resetButton = getResetButton();

      // act and assert
      await user.click(plusButton);
      expect(displayValue).toHaveTextContent('1');

      await user.click(resetButton);
      expect(displayValue).toHaveTextContent('0');
    });

    test('changes the counter when all of the buttons are clicked', async () => {
      // arrange
      const user = userEvent.setup();
      render(<Counter />);
      const displayValue = getDisplayValue('0');
      const plusButton = getPlusButton();
      const minusButton = getMinusButton();
      const resetButton = getResetButton();

      // act and assert
      await user.click(plusButton);
      expect(displayValue).toHaveTextContent('1');

      await user.click(minusButton);
      expect(displayValue).toHaveTextContent('0');

      await user.click(plusButton);
      expect(displayValue).toHaveTextContent('1');
      await user.click(plusButton);
      expect(displayValue).toHaveTextContent('2');

      await user.click(resetButton);
      expect(displayValue).toHaveTextContent('0');
    });
  });
});
