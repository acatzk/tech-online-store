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
  loading: () => <LoadingSpinner className="w-6 h-6 text-black" />
})

const CustomBuilds = dynamic(() => import('sections/CustomBuilds'), {
  ssr: false,
  loading: () => <LoadingSpinner className="w-6 h-6 text-black" />
})

const MSILaptops = dynamic(() => import('sections/MSILaptops'), {
  ssr: false,
  loading: () => <LoadingSpinner className="w-6 h-6 text-black" />
})

const Desktops = dynamic(() => import('sections/Desktops'), {
  ssr: false,
  loading: () => <LoadingSpinner className="w-6 h-6 text-black" />
})

const GamingMonitors = dynamic(() => import('sections/GamingMonitors'), {
  ssr: false,
  loading: () => <LoadingSpinner className="w-6 h-6 text-black" />
})

const CompanyList = dynamic(() => import('sections/CompanyList'), {
  ssr: false,
  loading: () => <LoadingSpinner className="w-6 h-6 text-black" />
})

const Testimonials = dynamic(() => import('sections/Testimonials'), {
  ssr: false,
  loading: () => <LoadingSpinner className="w-6 h-6 text-black" />
})

const Services = dynamic(() => import('sections/Services'), {
  ssr: false,
  loading: () => <LoadingSpinner className="w-6 h-6 text-black" />
})

const NewsAndOffers = dynamic(() => import('sections/News&Offers'), {
  ssr: false,
  loading: () => <LoadingSpinner className="w-6 h-6 text-black" />
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
        <NewsAndOffers />
        <Testimonials />
        <Services />
      </Layout>
    </React.Fragment>
  )
}

export default Index
