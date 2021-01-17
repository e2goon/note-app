import { RecoilRoot } from 'recoil'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>Note App</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
