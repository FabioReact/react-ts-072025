import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from "./features/favorites"
import authReducer from "./features/auth"

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch