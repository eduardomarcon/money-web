import { api } from '@/lib/axios'

export type GetLastMonthsTransactionsResponse = {
  amount: number
  monthYear: string
}[]

export async function getLastMonthsTransactions() {
  const response = await api.get<GetLastMonthsTransactionsResponse>(
    '/metrics/month-transactions',
  )

  return response.data
}
