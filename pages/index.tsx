import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from 'layouts/defaultLayout'
import HeroSlide from 'sections/HeroSlide'
import PromotionAlert from 'sections/PromotionAlert'

const NewProducts = dynamic(() => import('sections/NewProducts'), {
  ssr: false,
})

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Tech Online Store</title>
      </Head>
      <Layout>
        <HeroSlide />
        <NewProducts />
        <PromotionAlert />
      </Layout>
    </React.Fragment>
  )
}

export default Index
