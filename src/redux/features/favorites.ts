import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Hero } from "@/types/hero";

// Define a type for the slice state
interface FavoritesState {
  heroes: Hero[];
}

// Define the initial state using that type
const initialState: FavoritesState = {
  heroes: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Hero>) => {
      state.heroes.push(action.payload);
    },
    addHeroesToFavorites: (state, action: PayloadAction<Hero[]>) => {
      state.heroes.push(...action.payload);
    },
    removeFromFavorite: (state, action: PayloadAction<number>) => {
      state.heroes = state.heroes.filter((h) => h.id !== action.payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
