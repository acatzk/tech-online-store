import React from 'react'
import { IProduct } from 'mock'
import ProductItem from './ProductItem'

interface ProductListProps {
  products: Array<IProduct>
}

const ProductList: React.FC<ProductListProps> = ({ products }, props) => {
  return (
    <main className="w-full pt-2 carousel carousel-center">
      {products.map((product, i) => (
        <ProductItem key={i} {...product} {...props} />
      ))}
    </main>
  )
}

export default ProductList
