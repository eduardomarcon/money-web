import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  phone: string
  email: string
}

export async function updateProfile({ name, phone, email }: UpdateProfileBody) {
  await api.put('/profile', { name, phone, email })
}
