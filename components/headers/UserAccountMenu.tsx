import React from 'react'
import { User } from 'utils/Icons'
import { Menu, Transition } from '@headlessui/react'

const UserAccountMenu: React.FC = () => {
  return (
    <Menu as="div" className="inline-block">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className="flex items-center justify-center p-2 border-2 
            border-white lg:border-black rounded-full active:scale-95 transition ease-in-out duration-100"
            >
              <User className="w-3 h-3 text-white lg:text-black" />
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
              className="origin-top-right absolute right-0 mt-2 w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {[
                  'My Account',
                  'My Wish List (0)',
                  'Compare (0)',
                  'Create an Account',
                  'Sign In',
                ].map((link, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <a
                        href="#"
                        className="bg-white text-black block px-4 py-2 text-xs font-medium focus:bg-color-3 focus:text-white hover:bg-color-7"
                      >
                        {link}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default UserAccountMenu
