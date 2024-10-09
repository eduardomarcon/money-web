import { api } from '@/lib/axios'

export interface GetDayTransactionsAmountResponse {
  amount: number
}

export async function getDayTransactionsAmount() {
  const response = await api.get<GetDayTransactionsAmountResponse>(
    '/metrics/day-transactions-amount',
  )

  return response.data
}
