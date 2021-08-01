import React from 'react'
import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
import { Cart, Pencil } from 'utils/Icons'
import { Menu, Transition } from '@headlessui/react'

const AddToCardMenu: React.FC = () => {
  return (
    <Menu as="div" className="inline-block">
      {({ open }) => (
        <>
          <Menu.Button className="relative right-1 md:right-0 top-1 flex items-center active:scale-95 transition ease-in-out duration-100">
            <div className="absolute text-[0.65rem] px-1.5 py-0.5 font-bold bg-white lg:bg-color-3 text-color-3 lg:text-white rounded-full -top-3.5 left-3.5">
              2
            </div>
            <Cart className="w-5 h-5 text-white lg:text-black" />
          </Menu.Button>
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
              className="origin-top-right absolute right-10 mt-4 w-72 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <section className="flex flex-col divide-y">
                <header className="flex flex-col items-center py-5 px-4">
                  <h1 className="text-base font-semibold">My Cart</h1>
                  <p className="text-xs text-color-5 font-light">
                    2 item in cart
                  </p>
                  <button
                    type="button"
                    className="mt-3 block text-sm px-12 py-1 font-medium bg-transparent border-2 border-color-3
                     rounded-full text-color-3 hover:bg-color-3 hover:text-white transition ease-in-out duration-150"
                  >
                    View or Edit Your Cart
                  </button>
                </header>
                <main className="divide-y">
                  <ProductCart products={[0, 1]} />
                </main>
                <footer className="flex flex-col items-center px-6 py-4 mb-1 w-full">
                  <div className="font-semibold text-sm text-color-5">
                    <h1>
                      Subtotal:{' '}
                      <span className="text-black text-lg">$499.00</span>
                    </h1>
                  </div>
                  <div className="mt-2 space-y-2 w-full">
                    <button
                      type="button"
                      className="w-full text-xs py-2.5 font-semibold bg-color-3 text-white rounded-full
                      hover:bg-color-3/95 transition ease-in-out duration-150"
                    >
                      Go to Checkout
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center rounded-full w-full space-x-3 py-2 bg-[#FFB800] 
                      hover:bg-[#FFB800] hover:bg-opacity-95 transition ease-in-out duration-150"
                    >
                      <span className="text-xs text-black font-semibold">
                        Checkout with
                      </span>
                      <div className="flex items-center">
                        <Image
                          width={72}
                          height={19}
                          objectFit="cover"
                          src="/assets/svgs/paypal.svg"
                          alt="paypal"
                        />
                      </div>
                    </button>
                  </div>
                </footer>
              </section>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

function ProductCart({ products }) {
  return products.map((_, i) => (
    <div
      key={i}
      className="flex items-start w-full space-x-1 py-2 px-4 cursor-pointer hover:bg-gray-50 transition ease-in-out duration-150"
    >
      <div className="flex items-center space-x-1">
        <h1 className="font-medium">
          <span className="text-xl">1</span>x
        </h1>
        <div className="flex-shrink-0">
          <Image
            width={60}
            height={60}
            src="/assets/desktops/desktop3.svg"
            alt="card-image"
            objectFit="cover"
            quality={100}
            blurDataURL="/assets/desktops/desktop3.svg"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="flex-1">
        <p className="line-clamp-3 text-sm">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On
        </p>
      </div>
      <div className="flex flex-col space-y-1">
        <button
          className="focus:outline-none text-color-6 p-0.5 rounded-full border-2 border-color-6 
                    hover:text-black hover:border-black transition ease-in-out duration-150"
        >
          <IoClose className="w-4 h-4 p-0.5" />
        </button>
        <button
          className="focus:outline-none text-color-6 p-0.5 rounded-full border-2 border-color-6 
                    hover:text-black hover:border-black transition ease-in-out duration-150"
        >
          <Pencil className="w-4 h-4 p-0.5" />
        </button>
      </div>
    </div>
  ))
}

export default AddToCardMenu
