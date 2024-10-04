import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const transactionFiltersSchema = z.object({
  userName: z.string().optional(),
  status: z.string().optional(),
})

type TransactionFiltersSchema = z.infer<typeof transactionFiltersSchema>

export function FinanceTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const userName = searchParams.get('userName')
  const status = searchParams.get('status')

  const { register, handleSubmit, control, reset } =
    useForm<TransactionFiltersSchema>({
      resolver: zodResolver(transactionFiltersSchema),
      defaultValues: {
        userName: userName ?? '',
        status: status ?? 'all',
      },
    })

  function handleFilter({ userName, status }: TransactionFiltersSchema) {
    setSearchParams((state) => {
      if (userName) {
        state.set('userName', userName)
      } else {
        state.delete('userName')
      }

      if (status) {
        state.set('status', status)
      } else {
        state.delete('status')
      }

      state.set('page', '1')

      return state
    })
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete('userName')
      state.delete('status')
      state.set('page', '1')

      return state
    })

    reset({
      userName: '',
      status: 'all',
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">filters:</span>
      <Input
        placeholder="name"
        className="h-8 w-[320px]"
        {...register('userName')}
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">all transactions</SelectItem>
                <SelectItem value="incoming">incoming</SelectItem>
                <SelectItem value="debt">debt</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      ></Controller>
      <Button variant="secondary" size="xs" type="submit">
        <Search className="mr-2 h-4 w-4" />
        search
      </Button>
      <Button
        onClick={handleClearFilters}
        variant="outline"
        size="xs"
        type="button"
      >
        <X className="mr-2 h-4 w-4" />
        remove filters
      </Button>
    </form>
  )
}
