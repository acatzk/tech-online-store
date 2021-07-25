import React from 'react'
import Image from 'next/image'
import { IHeroImages } from 'mock'
import { Carousel } from 'react-responsive-carousel'

interface CarouselSlideProps {
  images: Array<IHeroImages>
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ images }) => (
  <Carousel
    showThumbs={false}
    dynamicHeight
    emulateTouch
    infiniteLoop
    showIndicators={false}
  >
    {images.map(({ src }, i) => (
      <div
        key={i}
        className="relative w-full h-[160px] md:h-[230px] lg:h-[330px]"
      >
        <Image src={src} layout="fill" objectFit="cover" alt="product" />
      </div>
    ))}
  </Carousel>
)

export default CarouselSlide
