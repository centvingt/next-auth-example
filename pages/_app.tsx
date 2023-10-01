import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import { NextAuthSessionProvider } from '@/helpers/next-auth/next-auth-session-provider'
import { Session } from 'next-auth'

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps & { session?: Session | null }) => {
  useEffect(() => {
    console.log('pages/_app.tsx > session >', session)
  }, [session])

  return (
    <NextAuthSessionProvider session={session}>
      <Component {...pageProps} />
    </NextAuthSessionProvider>
  )
}

export default App
