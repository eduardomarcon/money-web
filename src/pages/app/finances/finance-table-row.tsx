import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx'
import { TableCell, TableRow } from '@/components/ui/table'
import { FinanceDetails } from '@/pages/app/finances/finance-details'

export function FinanceTableRow() {
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
      <TableCell className="font-medium">R$ 45,90</TableCell>
      <TableCell className="font-medium">john doe</TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          delete
        </Button>
      </TableCell>
    </TableRow>
  )
}
