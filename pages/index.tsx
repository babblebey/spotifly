import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Spotifly</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center space-y-3">
        <Image src="/spotifly-g.svg" height={1986} width={569} alt="Spotifly" className="object-contain" />

        <h1 className="text-6xl font-bold">
          Spotifly - a Spotify Clone
        </h1>

        <p className="mt-3 text-2xl">
          Getting started
        </p>
      </main>
    </div>
  )
}

export default Home
