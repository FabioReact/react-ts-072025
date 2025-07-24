import type { Hero } from '@/types/hero'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const heroesApi = createApi({
  reducerPath: 'heroesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/heroes' }),
  endpoints: (builder) => ({
    getHeroesByLetter: builder.query<Hero[], string>({
      query: (letter) => `?name_like=^${letter}`,
    }),
    getHeroById: builder.query<Hero, string>({
      query: (id) => `/${id}`,
    })
  }),
})

export const { useGetHeroesByLetterQuery, useGetHeroByIdQuery } = heroesApi