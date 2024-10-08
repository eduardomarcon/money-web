import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Search, Trash } from 'lucide-react'
import { useState } from 'react'

import { TransactionStatus } from '@/components/transaction-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { FinanceDetails } from '@/pages/app/finances/finance-details'

interface FinanceTableRowProps {
  transaction: {
    transactionId: string
    createdAt: Date
    status: 'incoming' | 'debt'
    userName: string
    total: number
    description: string
  }
}

export function FinanceTableRow({ transaction }: FinanceTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">details</span>
            </Button>
          </DialogTrigger>
          <FinanceDetails
            open={isDetailsOpen}
            transactionId={transaction.transactionId}
          />
        </Dialog>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <TransactionStatus status={transaction.status} />

          {transaction.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
      </TableCell>
      <TableCell className="font-medium">
        {format(transaction.createdAt, 'eeeeee - dd MMM HH:mm', {
          locale: ptBR,
        })}
      </TableCell>
      <TableCell className="font-medium">{transaction.description}</TableCell>
      <TableCell>
        <Button variant="destructive" size="sm">
          <Trash className="h-3 w-3" size={16} />
        </Button>
      </TableCell>
    </TableRow>
  )
}
