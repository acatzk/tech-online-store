import React from 'react'
import Image from 'next/image'

const PromotionAlert = () => {
  return (
    <section className="container my-2 py-2 px-4 lg:py-0 lg:px-0 bg-[#F5F9FF] text-[#272560] text-base">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-3 space-y-2 md:space-y-0 px-4 py-6">
        <div className="relative w-[50px] h-[20px]  md:w-[60px] md:h-[30px]">
          <Image src="/assets/svgs/zip.svg" layout="fill" alt="zip-icon" />
        </div>
        <div className="hidden md:block">
          <div className="flex items-center">
            <Image
              width={3}
              height={19}
              src="/assets/svgs/divider.svg"
              objectFit="fill"
              alt="divider"
            />
          </div>
        </div>
        <h1>
          <span className="font-bold">own</span> it now, up to 6 months interest free
        </h1>
        <a href="#" className="text-lg md:text-base underline hover:no-underline">
          learn more
        </a>
      </div>
    </section>
  )
}

export default PromotionAlert
