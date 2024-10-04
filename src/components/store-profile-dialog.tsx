import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getProfile, GetProfileResponse } from '@/api/get-profile'
import { updateProfile } from '@/api/update-profile'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

const storeProfileSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
  const queryClient = useQueryClient()

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, phone, email }) {
      const { cached } = updateProfileCache({ name, phone, email })

      return { previousProfile: cached }
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateProfileCache(context.previousProfile)
      }
    },
  })

  function updateProfileCache({ name, phone, email }: StoreProfileSchema) {
    const cached = queryClient.getQueryData<GetProfileResponse>(['profile'])

    if (cached) {
      queryClient.setQueryData<GetProfileResponse>(['profile'], {
        ...cached,
        name,
        phone,
        email,
      })
    }

    return { cached: { name, phone, email } }
  }

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        phone: data.phone,
        email: data.email,
      })

      toast.success('profile updated successfully')
    } catch {
      toast.error('failed to update profile, please try again')
    }
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: profile?.name ?? '',
      phone: profile?.phone ?? '',
      email: profile?.email ?? '',
    },
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>your profile</DialogTitle>
        <DialogDescription>update your profile informations</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              name
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="phone">
              phone
            </Label>
            <Input className="col-span-3" id="phone" {...register('phone')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="email">
              email
            </Label>
            <Input className="col-span-3" id="email" {...register('email')} />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="destructive">
              cancel
            </Button>
          </DialogClose>
          <Button type="submit" disabled={isSubmitting}>
            save
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
