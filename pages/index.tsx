import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Layout from 'layouts/defaultLayout'

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Tech Online Store</title>
      </Head>
      <Layout>
        <div className="text-2xl font-bold text-purple-600">Hi Gayle</div>
      </Layout>
    </React.Fragment>
  )
}

export default Index
