import '@fortawesome/fontawesome-svg-core/styles.css'

import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Teddy Ni</title>
      <Component {...pageProps} />
    </>
  )
}
