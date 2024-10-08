import { api } from '@/lib/axios'

export interface GetTransactionDetailsParams {
  transactionId: string
}

export interface GetTransactionDetailsResponse {
  id: string
  description: string
  createdAt: string
  status: 'incoming' | 'debt'
  totalInCents: number
  user: {
    name: string
  }
}

export async function getTransactionDetails({
  transactionId,
}: GetTransactionDetailsParams) {
  const response = await api.get<GetTransactionDetailsResponse>(
    `/transactions/${transactionId}`,
  )

  return response.data
}
