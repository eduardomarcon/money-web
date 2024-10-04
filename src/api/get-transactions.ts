import { api } from '@/lib/axios'

export interface GetTransactionsQuery {
  pageIndex?: number | null
}

export interface GetTransactionsResponse {
  transactions: {
    transactionId: string
    createdAt: Date
    status: 'incoming' | 'debt'
    userName: string
    total: number
    description: string
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getTransactions({ pageIndex }: GetTransactionsQuery) {
  const response = await api.get<GetTransactionsResponse>('/transactions', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
