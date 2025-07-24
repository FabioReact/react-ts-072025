import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type User = {
    id: number;
    email: string;
    favorites: number[];
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/users' }),
  endpoints: (builder) => ({
    getUserById: builder.query<User, string>({
      query: (id) => `/${id}`,
    }),
    saveFavorites: builder.mutation<void, { userId: number, favorites: number[] }>({
      query: ({ userId, favorites }) => ({
        url: `/${userId}`,
        method: 'PATCH',
        body: { favorites },
      })
    }),
  }),
})

export const { useGetUserByIdQuery, useLazyGetUserByIdQuery, useSaveFavoritesMutation } = usersApi