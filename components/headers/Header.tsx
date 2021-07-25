import Sidebar from './Sidebar'
import React, { useState } from 'react'
import { sidebarLinks } from 'mock/index'
import { FiInstagram } from 'react-icons/fi'
import { RiCloseLine } from 'react-icons/ri'
import AccountDropdown from './AccountDropdown'
import ScheduleDropdown from './ScheduleDropdown'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { BiChevronDown, BiSearch } from 'react-icons/bi'
import { Logo, Menu, Cart, User, LogoWide } from 'utils/Icons'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [isAccount, setIsAccount] = useState(false)
  const [isSchedule, setIsSchedule] = useState(false)

  return (
    <React.Fragment>
      <header className="sticky top-0 overflow-x-hidden transition-all ease-in-out duration-300 z-10">
        {/* This is schedule and contact us links */}
        <section className="text-xs font-semibold bg-black text-white">
          <div className="container flex items-center justify-between px-4 lg:px-0 py-1">
            <div className="ml-16 lg:ml-0">
              <button
                onClick={() => setIsSchedule((prev) => !prev)}
                className="inline-flex items-center rounded-full px-1 py-0.5 border focus:border-color-5
                  border-transparent hover:border-color-5 space-x-1 transition ease-in-out duration-150"
              >
                <span className="text-color-5 line-clamp-1">Mon-Thu:</span>
                <span className="line-clamp-1">9:00 AM - 5:30 PM</span>
                <BiChevronDown className="w-4 h-4" />
              </button>
              {/* This is where SchduleMenuToggle shows */}
              {isSchedule && <ScheduleDropdown setIsSchedule={setIsSchedule} />}
            </div>
            <div className="flex items-center font-medium space-x-2">
              <h1 className="text-[#ACACAC] hidden lg:block">
                Visit our showroom in 1234 Street Address City Address, 1234
              </h1>
              <a href="#" className="border-b border-white line-clamp-1">
                Contact Us
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center text-xs space-x-2">
                <h1 className="font-medium">Call Us: (00) 1234 5678</h1>
                <RiFacebookBoxFill className="w-5 h-5 text-white" />
                <FiInstagram className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* This is the Main header */}
        <section className="bg-color-3 lg:bg-white border-b border-transparent lg:border-b-gray-200 px-4 py-3">
          <div className="container">
            {/* Main Logo */}
            <div className="block lg:hidden">
              <button className="absolute top-2 bg-color-3 rounded-t-[50px] p-1 active:scale-95 transition ease-in-out duration-100">
                <a href="#">
                  <Logo className="w-12 h-10 text-white" />
                </a>
              </button>
            </div>
            <div className="relative flex items-center justify-between space-x-3">
              {/* ======
               * FIRST FLEX ITEM
               * ======
               */}
              <div className="flex items-center">
                {/* Wide Logo shows in large screen */}
                <button className="hidden lg:block p-1 active:scale-95 transition ease-in-out duration-100">
                  <a href="#">
                    <LogoWide className="w-7 h-7 text-color-3" />
                  </a>
                </button>
                <button
                  onClick={() => setIsOpen(true)}
                  className="block lg:hidden active:scale-95 transition ease-in-out duration-100 p-1"
                >
                  <Menu className="w-6 h-6 text-white" />
                </button>
                {!isSearch && (
                  <nav className="hidden lg:block ml-14">
                    <ul className="flex flex-wrap items-center space-x-6 py-1.5">
                      {sidebarLinks.map((link, i) => (
                        <li key={i}>
                          <a
                            href="#"
                            className="text-black font-semibold text-sm hover:text-color-3 transition ease-in-out duration-150"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                      <div className="mx-4 md:mx-6">
                        <button
                          className="px-4 py-1 text-sm rounded-full border-2 font-medium border-color-3 
                        text-color-3 hover:bg-color-3 hover:text-white
                          transition ease-in-out duration-150"
                        >
                          Our Deals
                        </button>
                      </div>
                    </ul>
                  </nav>
                )}
              </div>
              {/* ======
               * SECOND FLEX ITEM
               * ======
               */}
              <div className="flex-grow">
                <div className="block lg:hidden">
                  <div className="form-control relative px-0 md:px-16">
                    <div className="absolute ml-3 flex items-center inset-y-0">
                      <BiSearch className="w-5 h-5 text-color-6" />
                    </div>
                    <input
                      type="text"
                      autoFocus
                      placeholder="Search here"
                      className="py-3 lg:py-3.5 pl-10 text-xs bg-white lg:bg-gray-200 rounded-full focus:outline-none"
                    />
                  </div>
                </div>
                {isSearch && (
                  <div className="hidden lg:block">
                    <div className=" form-control relative px-0 md:px-16">
                      <div className="absolute ml-3 flex items-center inset-y-0">
                        <BiSearch className="w-5 h-5 text-color-6" />
                      </div>
                      <input
                        type="text"
                        autoFocus
                        placeholder="Search here"
                        className="py-3 lg:py-3.5 pl-10 text-xs bg-white lg:bg-gray-200 rounded-full focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
              {/* ======
               * THIRD FLEX ITEM
               * ======
               */}
              <div className="flex items-center space-x-4 lg:space-x-6">
                {/* Close button show only in large screen */}
                <div className="flex items-center">
                  {isSearch && (
                    <button
                      onClick={() => setIsSearch(false)}
                      className="hidden lg:block active:scale-75 transition ease-in-out duration-100"
                    >
                      <RiCloseLine className="w-6 h-6 text-black" />
                    </button>
                  )}
                  {!isSearch && (
                    <button
                      onClick={() => setIsSearch(true)}
                      className="hidden lg:block active:scale-75 transition ease-in-out duration-100"
                    >
                      <BiSearch className="w-5 h-5 text-black" />
                    </button>
                  )}
                </div>
                {/* Cart button */}
                <button className="relative right-1 md:right-0 top-1 flex items-center active:scale-95 transition ease-in-out duration-100">
                  <div className="absolute text-[0.65rem] px-1.5 py-0.5 font-bold bg-white lg:bg-color-3 text-color-3 lg:text-white rounded-full -top-3.5 left-3.5">
                    2
                  </div>
                  <Cart className="w-5 h-5 text-white lg:text-black" />
                </button>
                {/* User dropdown button */}
                <div className="relative">
                  <button
                    onClick={() => setIsAccount((prev) => !prev)}
                    className="flex items-center justify-center p-2 border-2 border-white lg:border-black rounded-full active:scale-95 transition ease-in-out duration-100"
                  >
                    <User className="w-3 h-3 text-white lg:text-black" />
                  </button>
                  {isAccount && <AccountDropdown setIsAccount={setIsAccount} />}
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      {/* This is where sidebar shows */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </React.Fragment>
  )
}

export default Header
