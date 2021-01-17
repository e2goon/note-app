import { FC } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { IoIosArrowBack } from 'react-icons/io'

type LayoutType = {
  className?: string
  isBack?: boolean
}

const Layout: FC<LayoutType> = ({ className, isBack = false, children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={`font-body mx-auto max-w-md ${className && className}`}>
        <header className="flex flex-column items-center h-28">
          {isBack ? (
            <button
              onClick={() => Router.back()}
              type="button"
              className="flex items-center text-xl font-bold"
            >
              <IoIosArrowBack className="inline-block mr-1" />
              <span>TASKS</span>
            </button>
          ) : (
            <h1 className="flex-1 font-bold text-xl text-center">
              Alex's TASKS
            </h1>
          )}
        </header>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
