import { api } from '@/lib/axios'

export interface GetDailyTransactionsInPeriodQuery {
  status?: string
  from?: Date
  to?: Date
}

export type GetDailyTransactionsInPeriodResponse = {
  date: string
  amount: number
}[]

export async function getDailyTransactionsInPeriod({
  status,
  from,
  to,
}: GetDailyTransactionsInPeriodQuery) {
  const response = await api.get<GetDailyTransactionsInPeriodResponse>(
    '/metrics/daily-transactions-in-period',
    {
      params: {
        status,
        from,
        to,
      },
    },
  )

  return response.data
}
