import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import ScheduleMenu from './ScheduleMenu'
import { sidebarLinks } from 'mock/index'
import AddToCardMenu from './AddToCardMenu'
import { FiInstagram } from 'react-icons/fi'
import { RiCloseLine } from 'react-icons/ri'
import UserAccountMenu from './UserAccountMenu'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { Logo, Menu as MenuIcon, LogoWide } from 'utils/Icons'
import { BiChevronDown, BiSearch, BiChevronRight } from 'react-icons/bi'

const Sidebar = dynamic(() => import('./Sidebar'), {
  ssr: false,
})

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  return (
    <React.Fragment>
      <header className="sticky top-0 transition-all ease-in-out duration-300 z-10">
        {/* This is schedule and contact us links */}
        <section className="relative text-xs font-semibold bg-black text-white">
          <div className="container flex items-center justify-between px-4 lg:px-0 py-1">
            <div className="ml-16 lg:ml-0 relative">
              <ScheduleMenu />
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
        <section className="bg-color-3 lg:bg-white/75 lg:backdrop-blur-md lg:hover:bg-white border-b border-transparent lg:border-b-gray-200 px-4 py-3 transition ease-in-out duration-150">
          <div className="container">
            {/* ====
             * Main Logo
             * HIDE IN LARGE SCREEN
             * =====
             */}
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
                  <MenuIcon className="w-6 h-6 text-white" />
                </button>
                {!isSearch && (
                  <nav className="hidden lg:block ml-14">
                    <div className="flex flex-wrap items-center space-x-6 py-1.5">
                      {sidebarLinks.map((link, i) => (
                        <div key={i} className="relative group">
                          <div className="flex items-center space-x-1.5">
                            <a
                              href="#"
                              className="text-black font-semibold text-sm group hover:text-color-3 transition ease-in-out duration-150"
                            >
                              {link.title}
                            </a>
                            {link?.submenu && (
                              <BiChevronDown className="w-4 h-4 group-hover:text-color-3" />
                            )}
                          </div>
                          <SubMenuDropdown link={link} />
                        </div>
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
                    </div>
                  </nav>
                )}
              </div>
              {/* ======
               * SECOND FLEX ITEM
               * ======
               */}
              <div className="flex-grow relative">
                <div className="block lg:hidden">
                  <div className="form-control px-0 md:px-16">
                    <div className="absolute ml-3 flex items-center inset-y-0">
                      <BiSearch className="w-5 h-5 text-color-6" />
                    </div>
                    <input
                      type="text"
                      autoFocus
                      placeholder="Search here"
                      className="py-3 pl-10 text-sm bg-white lg:bg-color-7 rounded-full focus:outline-none"
                    />
                  </div>
                </div>
                {isSearch && (
                  <div className="hidden lg:block">
                    <div className=" form-control px-0 md:px-16">
                      <div className="absolute ml-3 flex items-center inset-y-0 right-20">
                        <BiSearch className="w-5 h-5 text-color-3" />
                      </div>
                      <input
                        type="text"
                        autoFocus
                        placeholder="Search here"
                        className="py-3 pl-10 lg:pl-6 text-sm bg-white lg:bg-color-7 rounded-full focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
              {/* ======
               * THIRD FLEX ITEM
               * ======
               */}
              <div className="relative flex items-center space-x-4 lg:space-x-6">
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
                <AddToCardMenu />
                {/* User Account Menu dropdown button */}
                <UserAccountMenu />
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

function SubMenuDropdown({ link }) {
  return (
    <div className="fixed z-10 hidden group-hover:block max-w-[230px] w-full">
      <ul className="shadow-xl bg-white text-sm py-1">
        {link.submenu?.map((l, i) => (
          <li
            key={i}
            className="hover:bg-color-7 hover:text-color-3 transition ease-in-out duration-100"
          >
            <a href="#" className="flex items-center justify-between py-2 px-6">
              <span className="font-medium">{l.title}</span>
              <BiChevronRight className="w-4 h-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header
