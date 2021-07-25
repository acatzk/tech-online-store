import React from 'react'
import { heroSlideImages } from 'mock'
import CarouselSlide from 'components/CarouselSlide'

const HeroSlide: React.FC = () => {
  return (
    <div className="container py-3 px-4 lg:py-0 lg:px-0">
      <CarouselSlide images={heroSlideImages} />
    </div>
  )
}

export default HeroSlide
