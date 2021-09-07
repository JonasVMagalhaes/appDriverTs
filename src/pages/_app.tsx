import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import '@styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <Component {...pageProps} />
    </>
  )
}
export default MyApp
