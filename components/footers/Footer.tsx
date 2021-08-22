import React from 'react'
import Image from 'next/image'
import CategoryList from './CategoryList'
import { ImFacebook2 } from 'react-icons/im'
import { RiInstagramFill } from 'react-icons/ri'
import { footerLinks, paymentLogos } from 'mock'
import CategoryCollapseList from './CategoryCollapseList'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container py-8 px-6 lg:px-0">
        <section className="flex flex-col md:flex-row justify-center md:justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left space-y-1">
            <h1 className="font-medium text-lg lg:text-2xl">Sign up To Our Newsletter.</h1>
            <p className="text-xs lg:text-sm font-extralight text-white">
              Be the first to hear about the latest offers.
            </p>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <div className="form-control flex-grow">
              <input
                type="text"
                placeholder="Your Email"
                className="py-2 pl-4 text-sm border-2 border-white rounded bg-black focus:outline-none w-full lg:w-[370px]"
              />
            </div>
            <button
              className="py-3 font-medium text-sm bg-color-3 hover:bg-color-3/80 rounded-full 
               px-6 lg:px-8 transition ease-in-out duration-150 active:scale-95"
            >
              Subscribe
            </button>
          </div>
        </section>
        <div className="block lg:hidden">
          <CategoryCollapseList footerLinks={footerLinks} />
        </div>
        <div className="hidden lg:block">
          <CategoryList footerLinks={footerLinks} />
        </div>
        <div className="flex flex-wrap items-center justify-between py-4 lg:border-t lg:border-[#353535]">
          <div className="flex items-center space-x-3">
            <ImFacebook2 className="w-5 h-5 text-[#C4C4C4]" />
            <RiInstagramFill className="w-6 h-6 text-[#C4C4C4]" />
          </div>
          <div className="hidden md:block">
            <PaymentImages paymentLogos={paymentLogos} />
          </div>
          <h1 className="text-xs font-light text-[#C4C4C4]">
            Copyright &copy; 2020 Shop Pty. Ltd.
          </h1>
        </div>
        <div className="block md:hidden">
          <PaymentImages paymentLogos={paymentLogos} />
        </div>
      </div>
    </footer>
  )
}

function PaymentImages({ paymentLogos }) {
  return (
    <div className="flex items-center justify-center space-x-2">
      {paymentLogos.map((src, i) => (
        <Image key={i} src={src} width={40} height={30} layout="fixed" quality={100} alt={src} />
      ))}
    </div>
  )
}

export default Footer
