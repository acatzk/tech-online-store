import React from 'react'

const Testimonials: React.FC = () => {
  return (
    <section className="mx-4 text-black">
      <div className="container mx-auto px-4 my-8 w-full md:mx-2xl lg:max-w-4xl bg-color-1">
        <div className="flex flex-col py-8 px-2 md:px-6 lg:px-12 space-y-3">
          <div className="flex items-start justify-center space-x-3 md:space-x-6">
            <span className="text-5xl font-extrabold">‘’</span>
            <p className=" leading-relaxed text-base font-medium">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <div className="ml-auto text-sm font-medium">- Tama Brown</div>
          <div className="flex items-center justify-between">
            <button
              className="font-semibold text-sm rounded-full border-2 border-color-3 
            text-color-3 py-1 px-5 space-x-2 hover:bg-color-3 hover:text-white
              transition ease-in-out duration-200 active:scale-95"
            >
              Leave Us A Review
            </button>
            <div className="flex items-center space-x-2">
              <button className="w-3 h-3 rounded-full bg-color-3 active:scale-95"></button>
              <button className="w-3 h-3 rounded-full bg-color-6 active:scale-95"></button>
              <button className="w-3 h-3 rounded-full bg-color-6 active:scale-95"></button>
              <button className="w-3 h-3 rounded-full bg-color-6 active:scale-95"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
