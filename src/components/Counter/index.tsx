import Button from './Button';
import { useCounter } from './useCounter';

import styles from './index.module.css';

const Counter = () => {
  const initialValue = 0;
  const { counter, increment, decrement, reset, isInitialValue } =
    useCounter(initialValue);

  return (
    <div className={styles.module}>
      <h1>{counter}</h1>
      <div className={styles.buttonContainer}>
        <Button
          label="-"
          onClick={decrement}
          disabled={isInitialValue}
          type="button"
        />
        <Button label="+" onClick={increment} type="button" />
      </div>
      <Button
        label="Reset"
        onClick={reset}
        disabled={isInitialValue}
        type="button"
      />
    </div>
  );
};

export default Counter;
