import React from 'react'
import dynamic from 'next/dynamic'
import Header from 'components/headers/Header'
import { LoadingSpinner } from 'utils/Loading'

const Footer = dynamic(() => import('components/footers/Footer'), {
  ssr: false,
  loading: () => <LoadingSpinner className="w-6 h-6 text-black" />,
})

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="relative antialiased text-black bg-white min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
