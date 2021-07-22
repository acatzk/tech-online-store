import React from 'react'
import { Logo, Menu, Cart, User } from 'utils/Icons'
import { BiChevronDown, BiSearch } from 'react-icons/bi'

const Header: React.FC = () => {
  return (
    <header className="relative">
      {/* This is schedule and contact us links */}
      <section className="text-xs font-semibold bg-black text-white">
        <div className="container flex items-center justify-between px-4 py-2">
          <div className="ml-16">
            <a
              href="#"
              className="inline-flex items-center rounded-full px-1 py-0.5 border border-transparent hover:border-color-5 space-x-1"
            >
              <span className="text-color-5 line-clamp-1">Mon-Thu:</span>
              <span className="line-clamp-1">9:00 AM - 5:30 PM</span>
              <BiChevronDown className="w-4 h-4" />
            </a>
          </div>
          <div>
            <a href="#" className="border-b border-white line-clamp-1">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      {/* This is the Main header */}
      <section className="bg-color-3">
        <div className="container px-4 py-3.5">
          <div className="absolute top-2 bg-color-3 rounded-t-[50px] p-1">
            <a href="#">
              <Logo className="w-12 h-10 text-white" />
            </a>
          </div>
          <div className="relative flex flex-wrap items-center space-x-3">
            <button>
              <Menu className="w-6 h-6 text-white" />
            </button>
            <div className="form-control relative flex-grow">
              <BiSearch className="absolute top-2.5  left-3 w-5 h-5 text-color-6" />
              <input
                type="text"
                placeholder="Search here"
                className="py-3 pl-10 text-xs bg-white rounded-full focus:outline-none"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative top-1 flex items-center">
                <div className="absolute text-[0.65rem] px-1.5 py-0.5 font-bold bg-white text-color-3 rounded-full -top-3.5 left-3.5">
                  2
                </div>
                <Cart className="w-5 h-5 text-white" />
              </button>
              <button className="flex items-center justify-center p-2 border-2 border-white rounded-full">
                <User className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
