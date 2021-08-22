import React from 'react'
import { CgClose } from 'react-icons/cg'
import { sidebarLinks } from 'mock/index'
import { BiChevronRight } from 'react-icons/bi'
import { LogoWide, LogoName } from 'utils/Icons'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: Function
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <aside className={`${isOpen && 'fixed z-10 inset-0'}`}>
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transform top-0 left-0 max-w-[300px] md:max-w-[400px] w-full bg-white text-black
        fixed h-full shadow overflow-auto ease-in-out transition-all duration-300 z-30`}
      >
        <div className="flex items-center justify-between py-5 mx-4 md:mx-6 border-b border-gray-300">
          <div>
            <LogoWide className="w-8 h-8 text-color-3 block md:hidden" />
            <LogoName className="w-10 h-8 hidden md:block" />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="active:scale-75 transition ease-in-out duration-100"
          >
            <CgClose className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col py-4 space-y-2 text-sm">
          <ul>
            {sidebarLinks.map((link, i) => (
              <li key={i} className="hover:bg-color-7 transition ease-in-out duration-100">
                <a href="#" className="flex items-center justify-between py-2 px-4 md:px-6">
                  <span className="font-normal">{link.title}</span>
                  <BiChevronRight className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-4 md:mx-6">
            <button
              className="px-8 py-1 rounded-full border-2 font-semibold border-color-3 
                text-color-3 hover:bg-color-3 hover:text-white
                 transition ease-in-out duration-150"
            >
              Our Deals
            </button>
          </div>
        </nav>
      </div>
      <Background isOpen={isOpen} setIsOpen={setIsOpen} />
    </aside>
  )
}

function Background({ isOpen, setIsOpen }) {
  return (
    isOpen && (
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-gray-700/50 z-0 cursor-default"
      ></div>
    )
  )
}

export default Sidebar
