import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination.tsx'
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
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">value</TableHead>
                  <TableHead>user</TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <FinanceTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
