import '../styles/globals.css'
import '../config/envs'

import type { AppProps } from 'next/app'
import { ReactQueryProvider } from '../src/services/rk-config'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ReactQueryProvider>
     <Component {...pageProps} />
    </ReactQueryProvider>
  )
}

export default MyApp
