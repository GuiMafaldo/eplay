import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Games } from '../pages/Home'
import { number } from 'yup'
type Product = {
  id: number
  price: number
}

type purchasePayload = {
  product: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}
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
    }),
    purchase: builder.mutation<any, purchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
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
  useGetGameQuery,
  usePurchaseMutation
} = api

export default api
