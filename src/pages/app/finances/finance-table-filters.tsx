import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function FinanceTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">filters:</span>
      <Input placeholder="name" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">all transactions</SelectItem>
          <SelectItem value="inc">incoming</SelectItem>
          <SelectItem value="deb">debt</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="secondary" size="xs" type="submit">
        <Search className="mr-2 h-4 w-4" />
        search
      </Button>
      <Button variant="outline" size="xs" type="button">
        <X className="mr-2 h-4 w-4" />
        remove filters
      </Button>
    </form>
  )
}
