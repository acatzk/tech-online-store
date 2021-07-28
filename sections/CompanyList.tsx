import React from 'react'
import Image from 'next/image'
import { companies } from 'mock'

const CompanyList: React.FC = () => {
  return (
    <section className="container mt-4 py-3 px-4 lg:py-0 lg:px-0">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 py-4">
        {companies.map(({ src }, i) => (
          <div key={i} className="py-4">
            <Image
              src={src}
              width={260}
              height={100}
              blurDataURL={src}
              placeholder="blur"
              layout="responsive"
              alt={src}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CompanyList
