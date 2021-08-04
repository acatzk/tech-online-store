import React from 'react'
import Image from 'next/image'
import { services, IService } from 'mock'

const Services: React.FC = () => {
  return (
    <section className="text-black mx-4 my-6">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:mx-2xl lg:max-w-4xl mx-auto">
        {services.map((data, i) => (
          <ServiceCard key={i} {...data} />
        ))}
      </div>
    </section>
  )
}

const ServiceCard: React.FC<IService> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 mx-10 md:mx-2 text-center space-y-2">
      <div className="flex items-center bg-color-3 p-3 rounded-full">
        <Image src={image} width={25} height={25} alt={image} />
      </div>
      <h1 className="font-bold text-base leading-snug">{title}</h1>
      <p className="text-sm mx-4 md:mx-0">{description}</p>
    </div>
  )
}

export default Services
