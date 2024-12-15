import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { getTransactionDetails } from '@/api/get-transaction-details'
import { TransactionStatus } from '@/components/transaction-status'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { FinanceDetailsSkeleton } from '@/pages/app/finances/finance-details-skeleton.tsx'

export interface TransactionDetailsProps {
  transactionId: string
  open: boolean
}

export function FinanceDetails({
  transactionId,
  open,
}: TransactionDetailsProps) {
  const { data: transaction } = useQuery({
    queryKey: ['transaction', transactionId],
    queryFn: () => getTransactionDetails({ transactionId }),
    enabled: open,
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>transaction: {transactionId}</DialogTitle>
        <DialogDescription>transaction details</DialogDescription>
      </DialogHeader>

      {transaction ? (
        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">type</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <TransactionStatus
                      status={transaction.status}
                      showStatus={true}
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">user</TableCell>
                <TableCell className="flex justify-end">
                  {transaction.user.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  inserted at
                </TableCell>
                <TableCell className="flex justify-end">
                  {format(
                    transaction.createdAt,
                    "eeee, dd/MM/yyyy 'at' HH:mm:ss",
                    {
                      locale: ptBR,
                    },
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  description
                </TableCell>
                <TableCell className="flex justify-end">
                  {transaction.description}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : (
        <FinanceDetailsSkeleton />
      )}
    </DialogContent>
  )
}
