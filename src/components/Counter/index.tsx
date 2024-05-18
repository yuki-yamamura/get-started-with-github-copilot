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
        <button
          type="button"
          onClick={decrement}
          disabled={isInitialValue}
          className={styles.button}
        >
          -
        </button>
        <button type="button" onClick={increment} className={styles.button}>
          +
        </button>
      </div>
      <button
        type="button"
        onClick={reset}
        disabled={isInitialValue}
        className={styles.button}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
