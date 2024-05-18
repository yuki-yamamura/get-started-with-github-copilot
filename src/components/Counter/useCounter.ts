import { useState } from 'react';

export const useCounter = (initialValue: number) => {
  const [counter, setCounter] = useState(initialValue);

  const isInitialValue = counter === initialValue;

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return {
    counter,
    isInitialValue,
    increment,
    decrement,
    reset,
  };
};
