import React from 'react'
import Image from 'next/image'
import { IProduct } from 'mock'
import ProductList from './ProductList'

interface ProductFeatureProps {
  title: string
  src: string
  products: Array<IProduct>
}

const ProductFeature: React.FC<ProductFeatureProps> = ({
  title,
  src,
  products,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center overflow-hidden flex-grow">
      <div className="relative w-[500px] h-[100px] md:w-[225px] md:h-[350px] flex-shrink-0">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          blurDataURL={src}
          placeholder="blur"
          alt="product-features"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="font-bold text-xl">{title}</h1>
          <a
            href="#"
            className="mt-4 md:mt-12 underline hover:no-underline text-xs md:text-sm font-light"
          >
            See All Products
          </a>
        </div>
      </div>
      <ProductList products={products} />
    </div>
  )
}

export default ProductFeature
