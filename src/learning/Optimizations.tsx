import { useState, memo, useCallback, useMemo } from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  console.log("Render du composant Title");
  const [result, setResult] = useState(0);

  useMemo(() => {
      let i = 100000000;
      let tmp = result;
      while (--i >= 0) {
        tmp += Math.random();
      }
      setResult(tmp);
  }, []);

  return (
    <h1>
      {children} - {result}
    </h1>
  );
};

const Button = memo(({ onClick, children } : { onClick: () => void, children: React.ReactNode }) => {
    console.log("Render du composant Button", children);
    return (<button onClick={onClick}>{children}</button>);
})

const Optimizations = () => {
  console.log("Render du composant Optimizations");
  const [value, setValue] = useState(5);
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  const incrementBy = useCallback(() => {
    setCounter((counter) => counter + value);
  }, [value]);

  const decremment = useCallback(() => {
    setCounter((c) => c - 1);
  }, []);

  return (
    <section>
      <Title>Optimizations</Title>
      <p>Counter: {counter}</p>
      <Button onClick={increment}>Increment</Button>
      <input type="number" defaultValue={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <Button onClick={incrementBy}>Increment by {value}</Button>
      <Button onClick={decremment}>Decrement</Button>
    </section>
  );
};

export default Optimizations;
