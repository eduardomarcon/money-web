import { api } from '@/lib/axios'

export interface TransactionOrderParams {
  transactionId: string
}

export async function deleteTransaction({
  transactionId,
}: TransactionOrderParams) {
  await api.delete(`/transactions/${transactionId}/delete`)
}
