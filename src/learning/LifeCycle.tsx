import { useEffect, useState } from "react";

const LifeCycle = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Component mounted - empty dependency array"); // mount
    return () => {
      console.log("Component will be unmounted - empty dependency array"); // unmount
    };
  }, []);

  // Effet de bord - side effect
  useEffect(() => {
    console.log("Component mounted - counter: ", counter); // mount for every change of counter
    return () => {
      console.log("Component will be unmounted - counter: ", counter); // unmount for every change of counter
    };
  }, [counter]);

  return (
    <section>
      <h1>LifeCycle</h1>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </section>
  );
};

export default LifeCycle;
