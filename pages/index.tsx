import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Layout from 'layouts/defaultLayout'
import HeroSlide from 'sections/HeroSlide'

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Tech Online Store</title>
      </Head>
      <Layout>
        <HeroSlide />
      </Layout>
    </React.Fragment>
  )
}

export default Index
