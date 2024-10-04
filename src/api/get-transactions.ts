import { api } from '@/lib/axios'

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

export async function getTransactions() {
  const response = await api.get<GetTransactionsResponse>('/transactions', {
    params: {
      pageIndex: 0,
    },
  })

  return response.data
}
