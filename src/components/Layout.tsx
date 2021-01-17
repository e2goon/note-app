import { FC } from 'react'
import Head from 'next/head'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Note App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-body">
        {children}
      </div>
    </>
  )
}

export default Layout
