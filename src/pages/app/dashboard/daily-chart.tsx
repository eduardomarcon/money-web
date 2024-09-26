import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '10/12', value: 15 },
  { date: '11/12', value: 40 },
  { date: '12/12', value: 10 },
  { date: '13/12', value: 0 },
  { date: '14/12', value: 80 },
  { date: '15/12', value: 12 },
  { date: '16/12', value: 80 },
]

export function DailyChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">daily value</CardTitle>
          <CardDescription>amount spent in period</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              stroke={colors.red[500]}
              type="linear"
              strokeWidth={2}
              dataKey="value"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
