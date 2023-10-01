'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode, useEffect, useState } from 'react'

export const NextAuthSessionProvider = ({
  children,
  session,
}: {
  children: ReactNode
  session: Session | null
}) => {
  const [interval, setInterval] = useState(1)

  useEffect(() => {
    console.log(
      'nextjs/helpers/next-auth/next-auth-session-provider.tsx > INTERVAL > session >',
      session,
    )

    if (session) {
      const timeRemaining = Math.round(
        (session.expires_at - 14 * 60 * 1000 - Date.now()) / 1000,
      )

      // setInterval(timeRemaining > 0 ? timeRemaining : 0)
      setInterval((prevInterval) =>
        timeRemaining > 0 ? timeRemaining : prevInterval,
      )
    }
  }, [session])

  return (
    // <SessionProvider session={session} refetchInterval={interval}>
    <SessionProvider session={session}>{children}</SessionProvider>
  )
}
