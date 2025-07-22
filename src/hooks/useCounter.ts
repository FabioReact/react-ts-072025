import { useState } from "react";

export const useCounter = (initialCount = 0) => {
  const [counter, setCounter] = useState(initialCount);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };

  const decrement = () => {
    setCounter((c) => c - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
