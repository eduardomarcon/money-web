import { api } from '@/lib/axios'

export interface RegisterUserBody {
  name: string
  phone: string
  email: string
}

export async function registerUser({ name, phone, email }: RegisterUserBody) {
  await api.post('/users', { name, phone, email })
}
