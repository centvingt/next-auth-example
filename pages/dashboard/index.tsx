import { FC } from 'react'

import { signOut } from 'next-auth/react'
import { useNextAuth } from '@/helpers/next-auth/use-next-auth'

const DashboardPage: FC = () => {
  const { sessionIsLoading, userData } = useNextAuth()

  return sessionIsLoading ? (
    <h1>Authentication in progress...</h1>
  ) : userData ? (
    <>
      <h1>Dashboard</h1>
      <h2>Welcome {userData.first_name}!</h2>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  ) : (
    <h1>Error</h1>
  )
}

export default DashboardPage
