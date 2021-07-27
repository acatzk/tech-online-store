import React from 'react'
import Header from 'components/headers/Header'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="relative antialiased text-black bg-white min-h-[2000px]">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
