import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getDayTransactionsAmount } from '@/api/get-day-transactions-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MetricCardSkeleton } from '@/pages/app/dashboard/metric-card-skeleton.tsx'

export function DailyValuesCard() {
  const { data: dayTransactionsAmount } = useQuery({
    queryKey: ['metrics', 'daily-transactions-amount'],
    queryFn: getDayTransactionsAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">today</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayTransactionsAmount ? (
          <span className="text-2xl font-bold tracking-tight">
            {(dayTransactionsAmount.amount / 100).toLocaleString('pt-BR', {
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
