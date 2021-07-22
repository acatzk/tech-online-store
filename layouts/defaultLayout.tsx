import React from 'react'
import Header from 'components/Header'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="antialiased min-h-screen text-black bg-[#ECECEC]">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
