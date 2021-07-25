import React from 'react'
import { heroSlideImages } from 'mock'
import CarouselSlide from 'components/CarouselSlide'

const HeroSlide: React.FC = () => {
  return (
    <div className="container">
      <CarouselSlide images={heroSlideImages} />
    </div>
  )
}

export default HeroSlide
