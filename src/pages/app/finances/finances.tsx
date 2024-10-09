import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getTransactions } from '@/api/get-transactions'
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
  const [searchParams, setSearchParams] = useSearchParams()

  const transactionId = searchParams.get('transactionId')
  const userName = searchParams.get('userName')
  const status = searchParams.get('status')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result } = useQuery({
    queryKey: ['transactions', pageIndex, transactionId, userName, status],
    queryFn: () =>
      getTransactions({
        pageIndex,
        transactionId,
        userName,
        status: status === 'all' ? null : status,
      }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

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
          {result && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
            />
          )}
        </div>
      </div>
    </>
  )
}
