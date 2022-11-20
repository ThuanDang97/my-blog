import Footer from '@layouts/Footer'
import Head from 'next/head'
import { ReactNode } from 'react'

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
      <Footer />
    </>
  )
}

export default PageLayout
