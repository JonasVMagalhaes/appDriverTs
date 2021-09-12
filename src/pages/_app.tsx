import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { firebaseCloudMessaging } from './api/utils/firebase'

import 'tailwindcss/tailwind.css';
import '@styles/global.css';
import '@styles/chat.style.css'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    firebaseCloudMessaging.init()
  })

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp;
