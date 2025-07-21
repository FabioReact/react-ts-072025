import { useCounter } from "../hooks/useCounter";

const Counter = () => {
    const { counter, increment, decrement, reset } = useCounter(3);
    const { counter: secondCounter } = useCounter(42);

  return (
    <section>
        <h1>Counter: {counter}</h1>
        <h2>Second Counter: {secondCounter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </section>
  )
}

export default Counter