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

const CustomBuilds = dynamic(() => import('sections/CustomBuilds'), {
  ssr: false,
})

const MSILaptops = dynamic(() => import('sections/MSILaptops'), {
  ssr: false,
})

const Desktops = dynamic(() => import('sections/Desktops'), {
  ssr: false,
})

const GamingMonitors = dynamic(() => import('sections/GamingMonitors'), {
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
        <CustomBuilds />
        <MSILaptops />
        <Desktops />
        <GamingMonitors />
      </Layout>
    </React.Fragment>
  )
}

export default Index
