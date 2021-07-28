import React from 'react'
import { monitors } from 'mock'
import ProductFeature from 'components/ProductFeature'

const GamingMonitors: React.FC = () => {
  return (
    <section className="container mt-4 py-3 px-4 lg:py-0 lg:px-0">
      <ProductFeature
        title="Gaming Monitors"
        src="/assets/gaming-monitors/cover.svg"
        products={monitors}
      />
    </section>
  )
}

export default GamingMonitors
