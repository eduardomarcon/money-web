import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Search, Trash } from 'lucide-react'

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
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">details</span>
            </Button>
          </DialogTrigger>
          <FinanceDetails />
        </Dialog>
      </TableCell>
      <TableCell
        className={`font-medium text-${transaction.status === 'incoming' ? 'green' : 'red'}-400`}
      >
        {transaction.total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
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
