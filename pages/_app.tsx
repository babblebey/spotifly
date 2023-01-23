import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { circular } from "../fonts"
import Navbar from "../components/Navbar"
import Player from "../components/Player"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${circular.variable} font-sans`}>
      <div className="sm:flex w-full sm:h-screen sm:overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Pages Content */}
        <div className="page">
          <Component {...pageProps} />
        </div>

        {/* Player */}
        <Player />
      </div>
    </main>
  )
}

export default MyApp
