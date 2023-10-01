import { AuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { JWT } from 'next-auth/jwt'

const NEXT_PUBLIC_API =
  'b9174e70eb01830837f4afbf03fd4748501d08fb76bebcbc83ea93891150b639'
const USER_EMAIL = 'example@email.com'
const USER_PASSWORD = 'PBGzMfnu6gV/3CWF'
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMTg1ZDM5LWEwOTUtNGQwYi1iMzNiLTUzMDE1MmI4YTA1MSIsInJvbGUiOiIwMTkwYTE3Ny0wNGU4LTRhNDAtODYwMy0zOTMzNTMwYjdiYWEiLCJhcHBfYWNjZXNzIjowLCJhZG1pbl9hY2Nlc3MiOjAsImlhdCI6MTY5NjEwNDc4OCwiZXhwIjoxNjk2MTA1Njg4LCJpc3MiOiJkaXJlY3R1cyJ9.UHGNB5HLmOGVwigz_Wv161UivmpjRqyoILyRrFhFXLQ'
const REFRESH_TOKEN =
  'gvsWMsPTstpNhvG2ZyedAQJJ--n9GJM_chf3JEew9QyEUa0OpqGj9TSElWlr4Ff3'

interface APIAuthtenticationData {
  data?: {
    expires: number
    refresh_token: string
    access_token: string
  }
  errors?: [{ message: string }]
}
interface APIMeData {
  data?: { first_name: string; last_name: string; email: string; id: string }
  errors?: [{ message: string }]
}

const getExpirationDate = () => Date.now() + 1000 * 15 * 60

const fillTokenWithAuthenticationData = (token: JWT, user: User) => {
  const {
    expires,
    refresh_token,
    access_token,
    id,
    email,
    first_name,
    last_name,
  } = user

  return {
    ...token,
    expires_at: getExpirationDate(),
    refresh_token,
    access_token,
    id,
    email,
    first_name,
    last_name,
  }
}

let refreshTokenIsLoading = false
const getRefreshedToken = async (token: JWT) => {
  try {
    return {
      ...token,
      access_token: ACCESS_TOKEN,
      refresh_token: REFRESH_TOKEN,
      expires_at: getExpirationDate(),
    }
  } catch (error) {
    console.log('---')
    console.log(
      new Date().toUTCString(),
      'helpers/next-auth/next-auth-options.ts > refreshAccessToken() > error >',
      error,
    )
    console.log('---')

    refreshTokenIsLoading = false
    return token
  }
}

export const nextAuthOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'credentials',

      /* SIGN IN FORM'S CONFIGURATION */
      credentials: {
        email: {
          label: 'E-mail',
          type: 'email',
          placeholder: 'johndoe@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },

      // Signin's handler
      async authorize(credentials) {
        try {
          if (!credentials) throw new Error('No credentials')

          const { email, password } = credentials

          const user: User = {
            expires: 1696150378,
            access_token: ACCESS_TOKEN,
            refresh_token: REFRESH_TOKEN,
            first_name: 'John',
            last_name: 'Doe',
            id: '1',
            email: 'example@email.com',
          }

          console.log(
            'nextjs/helpers/next-auth/next-auth-options.ts > USER >',
            user,
          )

          return user
        } catch (error) {
          console.error('---')
          console.error(
            new Date().toISOString(),
            'nextjs/helpers/next-auth/next-auth-options.ts > error >',
            error,
          )
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      try {
        // This will only be executed at login. Each next invocation will skip this part.
        if (user) return fillTokenWithAuthenticationData(token, user)

        // If the token is still valid, just return it.
        if (Date.now() < token.expires_at - 1000 * 60) return token

        const refreshedToken = await getRefreshedToken(token)

        return refreshedToken
      } catch (error) {
        token.error = 'Refresh token error'
        return token
      }
    },
    async session({ session, token }) {
      const { id, email, first_name, last_name, access_token, expires_at } =
        token

      session.user.id = id
      session.user.email = email
      session.user.first_name = first_name
      session.user.last_name = last_name

      session.isError = !!token.error

      session.access_token = access_token
      session.expires_at = expires_at

      return session
    },
  },
  events: {
    async signOut(message) {},
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
}
