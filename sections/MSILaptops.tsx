import React from 'react'
import { msiLaptops, msiTabs } from 'mock'
import ProductTabs from 'components/ProductTabs'
import ProductFeature from 'components/ProductFeature'

const MSILaptops: React.FC = () => {
  return (
    <section className="container mt-5 py-3 px-4 lg:py-0 lg:px-0 space-y-2">
      <ProductTabs tabs={msiTabs} />
      <ProductFeature
        title="MSI Laptops"
        src="/assets/msi-laptops/cover.svg"
        products={msiLaptops}
      />
    </section>
  )
}

export default MSILaptops
