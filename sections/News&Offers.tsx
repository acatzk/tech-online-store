import React from 'react'
import Image from 'next/image'
import { newsAndOffers, INewOffer } from 'mock'

const NewsAndOffers: React.FC = () => {
  return (
    <section className="hidden lg:block container my-10">
      <h1 className="text-xl font-semibold">Follow us on Instagram for News, Offers & More</h1>
      <div className="mt-3 grid lg:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-6">
        {newsAndOffers.map((data, i) => (
          <NewsCard key={i} {...data} />
        ))}
      </div>
    </section>
  )
}

const NewsCard: React.FC<INewOffer> = ({ image, text, date }) => {
  return (
    <div className="flex flex-col">
      <div>
        <Image
          src={image}
          width={250}
          height={150}
          blurDataURL={image}
          objectFit="cover"
          placeholder="blur"
          alt={image}
        />
      </div>
      <p className="mt-2 text-sm text-center leading-snug mx-4 line-clamp-7">{text}</p>
      <span className="mt-3 text-xs text-center text-color-5">{date}</span>
    </div>
  )
}

export default NewsAndOffers
