import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from "./features/favorites"
import authReducer from "./features/auth"
import { heroesApi } from './services/heroes'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    auth: authReducer,
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heroesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch