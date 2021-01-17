import { FC } from 'react'
import Head from 'next/head'

type LayoutType = {
  className?: string;
}

const Layout: FC<LayoutType> = ({ className, children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* MEMO: 유효한 마크업 아니나, 클래스명을 주는 간단한 방법이므로 등가교환임 */}
      </Head>
      <main className={`font-body mx-auto max-w-md ${className && className}`}>
        <header className="py-10">
          <h1 className="font-bold text-xl text-center">Alex's TASKS</h1>
        </header>
        {children}
      </main>
    </>
  )
}

export default Layout
