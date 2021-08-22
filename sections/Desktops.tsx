import React from 'react'
import { desktops, desktopTabs } from 'mock'
import ProductTabs from 'components/ProductTabs'
import ProductFeature from 'components/ProductFeature'

const Desktops: React.FC = () => {
  return (
    <section className="container mt-6 py-3 px-4 lg:py-0 lg:px-0 space-y-2">
      <ProductTabs tabs={desktopTabs} />
      <ProductFeature title="Desktops" src="/assets/desktops/cover.svg" products={desktops} />
    </section>
  )
}

export default Desktops
