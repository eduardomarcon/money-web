import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function FinanceTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Skeleton className="h-6 w-[50px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-[210px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-[170px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-[1200px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-6 w-[80px]" />
        </TableCell>
      </TableRow>
    )
  })
}
