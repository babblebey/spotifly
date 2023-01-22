import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { circular } from "../fonts"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${circular.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
