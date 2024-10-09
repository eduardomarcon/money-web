import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthTransactionsAmount } from '@/api/get-month-transactions-amount.ts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthlyDebtsCard() {
  const { data: monthDebtTransactionsMonth } = useQuery({
    queryKey: ['metrics', 'month-debit-transactions-amount'],
    queryFn: () => getMonthTransactionsAmount({ status: 'debt' }),
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          debts (monthly)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthDebtTransactionsMonth && (
          <span className="text-2xl font-bold tracking-tight">
            {(monthDebtTransactionsMonth.amount / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        )}
      </CardContent>
    </Card>
  )
}
