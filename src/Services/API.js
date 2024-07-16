import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleAPI = createApi({
  tagTypes: ["articles"], // on definit les tags
  reducerPath: 'articleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => `products`,
      providesTags: ["articles"] // On set le tag pour Articles
    }),
    createArticle: builder.mutation({
      query: (body) => ({
        url: `/products`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ["articles"] // On invalide le tag
    }),
    updateProducts: builder.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body
      }),
      invalidatesTags: ["articles"] // On invalide le tag
    }),
    deleteProducts: builder.query({
        query: (id) => `/products/${id}`,
        providesTags: ["articles"] // On set le tag pour Articles
    }),
  }),
})

export const { useGetArticlesQuery, useCreateArticleMutation, useUpdateProductsMutation, useDeleteProductsQuery } = articleAPI