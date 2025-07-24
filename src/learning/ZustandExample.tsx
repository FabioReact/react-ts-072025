import store, { useBearStore } from "@/zustand/store";

const releaseToNature = () => {
    // removeAllBears = useBearStore(state => state.removeAllBears);
    store.getState().removeAllBears();
}; 

const ZustandExample = () => {
  const { bears, increasePopulation } = useBearStore((state) => state);

  return (
    <section>
      <h1>Zustand Example</h1>
      <p>We have {bears} bears around here</p>
      <button onClick={increasePopulation}>Increase population</button>
      <button onClick={releaseToNature}>Release to nature</button>
    </section>
  );
};

export default ZustandExample;
