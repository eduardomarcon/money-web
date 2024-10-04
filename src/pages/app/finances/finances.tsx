import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getTransactions } from '@/api/get-transactions.ts'
import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { FinanceTableFilters } from '@/pages/app/finances/finance-table-filters'
import { FinanceTableRow } from '@/pages/app/finances/finance-table-row'

export function Finances() {
  const { data: result } = useQuery({
    queryKey: ['orders'],
    queryFn: getTransactions,
  })

  return (
    <>
      <Helmet title="finances" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">finances</h1>
        <div className="space-y-2.5">
          <FinanceTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]"></TableHead>
                  <TableHead className="w-[200px]">value</TableHead>
                  <TableHead className="w-[200px]">date</TableHead>
                  <TableHead>description</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result &&
                  result.transactions.map((transaction) => (
                    <FinanceTableRow
                      key={transaction.transactionId}
                      transaction={transaction}
                    />
                  ))}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
