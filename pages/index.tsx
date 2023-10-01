import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shipping Messenger</title>
        <meta name="description" content="Home" />
        <meta property="og:title" content="Shipping Messenger" />
        <meta property="og:description" content="Home" />
      </Head>
      <h1 className="flex min-h-screen flex-col items-center justify-between p-24">
        HomePage
      </h1>
    </div>
  )
}
