import { Helmet } from 'react-helmet-async'

import { DailyValuesCard } from '@/pages/app/dashboard/daily-values-card'
import { MonthlyDebtsCard } from '@/pages/app/dashboard/monthly-debts-card'
import { MonthlyIncomeCard } from '@/pages/app/dashboard/monthly-income-card'
import { MonthlyValuesCard } from '@/pages/app/dashboard/monthly-values-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <DailyValuesCard />
          <MonthlyValuesCard />
          <MonthlyIncomeCard />
          <MonthlyDebtsCard />
        </div>
      </div>
    </>
  )
}
