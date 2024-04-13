import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Games } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeatureGame: builder.query<Games, void>({
      query: () => 'destaque'
    }),

    getOnSale: builder.query<Games[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Games[], void>({
      query: () => 'em-breve'
    }),
    getAction: builder.query<Games[], void>({
      query: () => 'acao'
    }),
    getEsports: builder.query<Games[], void>({
      query: () => 'esportes'
    }),
    getSimulacao: builder.query<Games[], void>({
      query: () => 'simulacao'
    }),
    getRpg: builder.query<Games[], void>({
      query: () => 'rpg'
    }),
    getLuta: builder.query<Games[], void>({
      query: () => 'luta'
    }),
    getGame: builder.query<Games, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeatureGameQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetActionQuery,
  useGetEsportsQuery,
  useGetSimulacaoQuery,
  useGetRpgQuery,
  useGetLutaQuery,
  useGetGameQuery
} = api

export default api
