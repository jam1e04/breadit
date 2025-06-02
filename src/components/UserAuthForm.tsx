"use client";
import { FC } from 'react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Icons } from './Icons'
import { useToast } from '@/hooks/use-toast';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const UserAuthForm: FC<UserAuthFormProps> = ((className, ...props) => {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      throw new Error('Failed to sign in with Google')
    } catch (error) {
      // TODO: Handle error
      console.log(error)
      toast({
        title: 'There was a problem.',
        description: 'There was a problem logging in with Google. Please try again later.',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button onClick={loginWithGoogle} isLoading={isLoading} size='sm' className='w-full'>{isLoading ? null : <Icons.google className='h-4 w-4 mr-2'></Icons.google>}Google</Button>
    </div>
  )
})

export default UserAuthForm