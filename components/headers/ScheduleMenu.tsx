import { Location } from 'utils/Icons'
import React, { useState } from 'react'
import { FiClock } from 'react-icons/fi'
import { BiChevronDown } from 'react-icons/bi'
import { Menu, Transition } from '@headlessui/react'

const ScheduleMenu: React.FC = () => {
  return (
    <Menu as="div" className="inline-block">
      {({ open }) => (
        <React.Fragment>
          <div>
            <Menu.Button
              className="inline-flex items-center rounded-full px-1 py-0.5 border focus:border-color-5
                  border-transparent hover:border-color-5 space-x-1 transition ease-in-out duration-150"
            >
              <span className="text-color-5 line-clamp-1">Mon-Thu:</span>
              <span className="line-clamp-1">9:00 AM - 5:30 PM</span>
              <BiChevronDown className="w-4 h-4" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute z-10 w-[230px] sm:w-[300px] shadow-lg bg-white text-black ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <ul className="divide-y-2 divide-gray-300">
                <li className="flex items-start justify-center space-x-4 py-4">
                  <FiClock className="w-6 h-6" />
                  <div className="space-y-1">
                    <p className="font-medium">We are open:</p>
                    <h3>
                      <span className="text-color-5">Mon-Thu:</span> 9:00 AM - 5:30 PM
                    </h3>
                    <h3>
                      <span className="text-color-5">Fr:</span> 9:00 AM - 6:00 PM
                    </h3>
                    <h3>
                      <span className="text-color-5">Sat:</span> 11:00 AM - 5:00 PM
                    </h3>
                  </div>
                </li>
                <li className="flex items-start justify-center space-x-4 py-4">
                  <Location className="w-6 h-6" />
                  <div className="w-[170px]">
                    <p className="font-medium">Address: 1234 Street Address, City Address, 1324</p>
                  </div>
                </li>
                <li className="flex items-center flex-col justify-center py-4 space-y-1">
                  <h3 className="mr-16 font-medium">
                    Phones:{' '}
                    <span className="text-color-3 hover:underline cursor-text">(00) 1234 5678</span>
                  </h3>
                  <h3 className="mr-12 font-medium">
                    E-mail:{' '}
                    <span className="text-color-3 hover:underline cursor-text">shop@email.com</span>
                  </h3>
                </li>
              </ul>
            </Menu.Items>
          </Transition>
        </React.Fragment>
      )}
    </Menu>
  )
}

export default ScheduleMenu
