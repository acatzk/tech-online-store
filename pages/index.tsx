/* eslint-disable react/display-name */
import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from 'layouts/defaultLayout'
import HeroSlide from 'sections/HeroSlide'
import { LoadingSpinner } from 'utils/Loading'
import PromotionAlert from 'sections/PromotionAlert'

const NewProducts = dynamic(() => import('sections/NewProducts'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

const CustomBuilds = dynamic(() => import('sections/CustomBuilds'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

const MSILaptops = dynamic(() => import('sections/MSILaptops'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

const Desktops = dynamic(() => import('sections/Desktops'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

const GamingMonitors = dynamic(() => import('sections/GamingMonitors'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

const CompanyList = dynamic(() => import('sections/CompanyList'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
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
        <CompanyList />
      </Layout>
    </React.Fragment>
  )
}

export default Index
