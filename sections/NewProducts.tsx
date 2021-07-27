import React from 'react'
import { newProducts } from 'mock'
import ProductList from 'components/ProductList'

const NewProducts: React.FC = () => {
  return (
    <section className="container py-2 px-4 lg:px-0 lg:mt-6">
      <header className="flex flex-wrap items-center justify-between">
        <h1 className="text-lg font-semibold">New Products</h1>
        <a href="#" className="text-xs text-black underline hover:no-underline">
          See All New Products
        </a>
      </header>
      <ProductList products={newProducts} />
    </section>
  )
}

export default NewProducts
