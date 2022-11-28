import Head from 'next/head'
import { lazy, ReactNode, Suspense } from 'react'

// Layouts
const Footer = lazy(() => import('@layouts/Footer'))
export interface IPageLayout {
  children: ReactNode
}

const PageLayout = ({ children }: IPageLayout) => {
  return (
    <>
      <Head>
        <title>Code your life in an elegant way</title>
      </Head>
      {children}
      <Suspense fallback={<div>loading.....</div>}>
        <Footer />
      </Suspense>
    </>
  )
}

export default PageLayout
