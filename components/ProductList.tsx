import React from 'react'
import { INewProduct } from 'mock'
import ProductItem from './ProductItem'

interface ProductListProps {
  products: Array<INewProduct>
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
