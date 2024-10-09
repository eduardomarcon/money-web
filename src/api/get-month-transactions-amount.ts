import { api } from '@/lib/axios'

export interface GetMonthTransactionsAmountQuery {
  status?: string | null
}

export interface GetMonthTransactionsAmountResponse {
  amount: number
}

export async function getMonthTransactionsAmount({
  status,
}: GetMonthTransactionsAmountQuery) {
  const response = await api.get<GetMonthTransactionsAmountResponse>(
    '/metrics/month-transactions-amount',
    {
      params: { status },
    },
  )

  return response.data
}
