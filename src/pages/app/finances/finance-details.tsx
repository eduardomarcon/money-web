import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export function FinanceDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>transaction: 1827fy2827d6h</DialogTitle>
        <DialogDescription>transaction details</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">type</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="font-medium text-muted-foreground">
                    debt
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">user</TableCell>
              <TableCell className="flex justify-end">john doe</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                inserted at
              </TableCell>
              <TableCell className="flex justify-end">
                {new Date().toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                description
              </TableCell>
              <TableCell className="flex justify-end">
                Lorem ipsum dolor sit amet. Rem exercitationem nobis ut
                perferendis itaque est omnis nulla. Non dolorum ullam nam
                perspiciatis porro sit sunt tempora et assumenda laborum ex unde
                dolores sed mollitia culpa et quaerat libero.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
