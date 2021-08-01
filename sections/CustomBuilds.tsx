import React from 'react'
import { customBuilds } from 'mock/index'
import ProductFeature from 'components/ProductFeature'

const CustomBuilds: React.FC = () => {
  return (
    <section className="container mt-5 py-3 px-4 lg:py-0 lg:px-0">
      <ProductFeature
        title="Custome Builds"
        src="/assets/custom-builds/cover.svg"
        products={customBuilds}
      />
    </section>
  )
}

export default CustomBuilds
