import NextAuth, { DefaultSession } from 'next-auth'
import { DefaultJWT, JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    expires: number
    access_token: string
    refresh_token: string
    first_name: string
    last_name: string
    email: string
    error?: [{ message: string }]
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    expires_at: number
    access_token: string
    refresh_token: string
    first_name: string
    last_name: string
    email: string
    id: string
    error?: string
  }
}

declare module 'next-auth' {
  interface Session {
    isError: boolean
    access_token: string
    expires_at: number
    user: {
      first_name: string
      last_name: string
      email: string
      id: string
    } & DefaultSession['user']
  }
}
