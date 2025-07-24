import { create, createStore, useStore } from 'zustand'

interface BearState {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

export const store = createStore<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

// const { getState, setState, subscribe, getInitialState } = store

export const useBearStore = (selector: BearState) => useStore(store, selector)

export default store