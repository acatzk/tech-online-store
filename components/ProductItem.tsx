import React from 'react'
import Image from 'next/image'
import { INewProduct } from 'mock'
import { motion } from 'framer-motion'
import { Currency } from 'react-intl-number-format'
import { AiFillCheckCircle, AiFillStar } from 'react-icons/ai'

const ProductItem: React.FC<INewProduct> = ({
  image,
  name,
  reviews,
  before_price,
  new_price,
  isStock,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="carousel-item border border-transparent hover:border-gray-100 hover:shadow-xl cursor-pointer transition ease-in-out duration-150"
    >
      <div className="flex flex-col py-3 px-6">
        <ProductStatus isStock={isStock} />
        <div className="mt-2 relative w-[150px] mx-2 h-[150px] flex flex-col items-center">
          <Image
            src={image}
            layout="fill"
            className="w-full h-full"
            alt="product-1"
          />
        </div>
        <ProductReviews reviews={reviews} />
        <h1 className="mt-3 line-clamp-3 text-sm max-w-[160px]">{name}</h1>
        <div className="mt-2 flex flex-col text-sm">
          <h2 className="text-color-11 line-through">
            <Currency locale="en-US" currency="USD">
              {before_price}
            </Currency>
          </h2>
          <h1 className="text-black font-semibold line-through text-lg">
            <Currency locale="en-US" currency="USD">
              {new_price}
            </Currency>
          </h1>
        </div>
      </div>
    </motion.div>
  )
}

function ProductReviews({ reviews }) {
  return (
    <div className="mt-2 flex items-center space-x-2">
      <div className="flex">
        {reviews === 5 && (
          <>
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
          </>
        )}
        {reviews === 4 && (
          <>
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
          </>
        )}
        {reviews === 3 && (
          <>
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
          </>
        )}
        {reviews === 2 && (
          <>
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
          </>
        )}
        {reviews === 1 && (
          <>
            <AiFillStar className="w-3.5 h-3.5 text-[#E9A426]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
          </>
        )}
        {reviews < 0 && (
          <>
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
            <AiFillStar className="w-3.5 h-3.5 text-[#C4C4C4]" />
          </>
        )}
      </div>
      <p className="text-xs text-color-5">
        {reviews === 0
          ? `No Reviews`
          : `Review${reviews >= 2 ? `s` : ''} (${reviews})`}
      </p>
    </div>
  )
}

function ProductStatus({ isStock }) {
  return (
    <React.Fragment>
      {isStock && (
        <span className="flex items-center space-x-2 text-color-10">
          <AiFillCheckCircle className="w-3 h-3" />
          <p className="text-xs">in stock</p>
        </span>
      )}
      {!isStock && (
        <span className="flex items-center space-x-2 text-color-9">
          <svg
            className="w-3 h-3"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5.5" cy="5" r="5" fill="#C94D3F" />
            <path
              d="M6.17669 5.85626L6.52669 5.50626C6.57383 5.4597 6.63347 5.42783 6.69838 5.41452C6.76328 5.4012 6.83065 5.40702 6.89231 5.43126L7.31888 5.60157C7.38119 5.62686 7.43462 5.67004 7.47244 5.72565C7.51025 5.78126 7.53076 5.84682 7.53138 5.91407V6.69532C7.53101 6.74107 7.5214 6.78627 7.50311 6.8282C7.48481 6.87013 7.45823 6.90793 7.42494 6.93931C7.39166 6.9707 7.35237 6.99502 7.30944 7.01083C7.2665 7.02663 7.22082 7.03358 7.17513 7.03126C4.18607 6.84532 3.58294 4.31407 3.46888 3.34532C3.46358 3.29775 3.46842 3.24959 3.48307 3.20402C3.49772 3.15846 3.52186 3.11651 3.55389 3.08093C3.58592 3.04536 3.62511 3.01698 3.6689 2.99764C3.71269 2.97831 3.76007 2.96846 3.80794 2.96876H4.56263C4.62997 2.96896 4.69572 2.9893 4.75141 3.02717C4.8071 3.06504 4.85018 3.1187 4.87513 3.18126L5.04544 3.60782C5.07048 3.66924 5.07687 3.73667 5.06381 3.8017C5.05075 3.86672 5.01882 3.92646 4.972 3.97344L4.622 4.32344C4.622 4.32344 4.82356 5.68751 6.17669 5.85626Z"
              fill="white"
            />
          </svg>
          <p className="text-xs">check availability</p>
        </span>
      )}
    </React.Fragment>
  )
}

export default ProductItem
