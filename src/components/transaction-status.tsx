type TransactionStatus = 'incoming' | 'debt'

interface TransactionStatusProps {
  status: TransactionStatus
  showStatus?: boolean
}

const transactionStatusMap: Record<TransactionStatus, string> = {
  incoming: 'incoming',
  debt: 'debt',
}

export function TransactionStatus({
  status,
  showStatus = false,
}: TransactionStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'incoming' && (
        <span className="h-2 w-2 rounded-full bg-green-400" />
      )}

      {status === 'debt' && (
        <span className="h-2 w-2 rounded-full bg-red-400" />
      )}

      {showStatus && (
        <span className="font-medium text-muted-foreground">
          {transactionStatusMap[status]}
        </span>
      )}
    </div>
  )
}
