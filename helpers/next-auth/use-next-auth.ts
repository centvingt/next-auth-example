'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Session } from 'next-auth'

export const useNextAuth = () => {
  const router = useRouter()

  const [sessionIsLoading, setSessionIsLoading] = useState(true)
  const [userData, setUserData] = useState<Session['user'] | null>(null)
  const [accessToken, setAccessToken] = useState<
    Session['access_token'] | null
  >(null)

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin?callbackUrl=/')
    },
  })

  useEffect(() => {
    const handleSession = () => {
      if (session && status === 'authenticated') {
        if (session.isError) signOut()
        const {
          user: { first_name, last_name, id, email },
          access_token,
        } = session

        console.log('nextjs/helpers/next-auth/use-next-auth.ts > NEW RENDER')

        setUserData({ first_name, last_name, id, email })
        setAccessToken(access_token)
      }

      setSessionIsLoading(status === 'loading')
    }

    handleSession()
  }, [session, status])

  return { sessionIsLoading, userData, accessToken }
}
