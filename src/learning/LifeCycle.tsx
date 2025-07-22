import { useEffect, useLayoutEffect, useState } from "react";

// Rouge -> Vert -> Gris -> Bleu

const LifeCycle = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Gris")
    console.log("Component mounted - empty dependency array"); // mount
    return () => {
      console.log("Component will be unmounted - empty dependency array"); // unmount
    };
  }, []);

  // Effet de bord - side effect
  useEffect(() => {
    console.log("Bleu")
    // console.log("Component mounted - counter: ", counter); // mount for every change of counter
    return () => {
      console.log("Component will be unmounted - counter: ", counter); // unmount for every change of counter
    };
  }, [counter]);

  console.log("Vert")

  useLayoutEffect(() => {
    console.log("Rouge")
    // console.log("useLayoutEffect runs with []"); // runs synchronously before the DOM is painted
  }, []);

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
