import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from "./features/favorites"
import authReducer from "./features/auth"
import { heroesApi } from './services/heroes'
import { usersApi } from './services/users'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    auth: authReducer,
    [heroesApi.reducerPath]: heroesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heroesApi.middleware, usersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch