import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthTransactionsAmount } from '@/api/get-month-transactions-amount.ts'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { MetricCardSkeleton } from '@/pages/app/dashboard/metric-card-skeleton.tsx'

export function MonthlyValuesCard() {
  const { data: monthTransactionsMonth } = useQuery({
    queryKey: ['metrics', 'month-transactions-amount'],
    queryFn: () => getMonthTransactionsAmount({}),
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">month</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthTransactionsMonth ? (
          <span className="text-2xl font-bold tracking-tight">
            {(monthTransactionsMonth.amount / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
