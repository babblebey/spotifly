import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { circular } from "../fonts";
import Navbar from "../components/Navbar";
import Player from "../components/Player"; 
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  // Layout Specifically for Sign In Page
  if (router.pathname === '/auth/signin') {
    return (
      <SessionProvider session={session}>
        <div className={`${circular.variable} font-sans`}>
          <Component { ...pageProps } />
        </div>
      </SessionProvider>
    )
  }

  // Layout for all other Pages
  return (
    <SessionProvider session={session}>
      <div className={`${circular.variable} font-sans`}>
        <div className="sm:flex w-full sm:h-screen sm:overflow-hidden">
          {/* Navbar */}
          <Navbar />

          {/* Pages Content */}
          <div className="page relative bg-sdark-base">
            <Component {...pageProps} />
          </div>

          {/* Player */}
          <Player />
        </div>
      </div>
    </SessionProvider>
  )
}

export default MyApp
