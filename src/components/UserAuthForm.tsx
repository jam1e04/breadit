"use client";
import { FC } from 'react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Icons } from './Icons'
import { useToast } from '@/hooks/use-toast';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const UserAuthForm: FC<UserAuthFormProps> = ({className, ...props})=> {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const loginWithGithub = async () => {
    setIsLoading(true)

    try {
      signIn('github')
    } catch (error) {
      // TODO: Handle error
      
      toast({
        title: 'There was a problem.',
        description: 'There was a problem logging in with Github. Please try again later.',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button onClick={loginWithGithub} isLoading={isLoading} size='sm' className='w-full'>{isLoading ? null : <Icons.github className='h-4 w-4 mr-2'></Icons.github>}Google</Button>
    </div>
  )
}

export default UserAuthForm