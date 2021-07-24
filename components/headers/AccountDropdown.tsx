import React from 'react'

interface AccountDropdownProps {
  setIsAccount: Function
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({ setIsAccount }) => {
  return (
    <React.Fragment>
      <div className="fixed container w-full sm:w-[260px] sm:right-4 md:right-6 lg:right-16 inset-x-0 sm:inset-x-auto mt-2 shadow-xl z-10 bg-white text-black">
        <div className="absolute w-5 h-5 bg-white right-6 md:right-2 rotate-45"></div>
        <div className="relative">
          <ul className="py-1.5 text-xs">
            {[
              'My Account',
              'My Wish List (0)',
              'Compare (0)',
              'Create an Account',
              'Sign In',
            ].map((link, i) => (
              <DropdownLink key={i} link={link} setIsAccount={setIsAccount} />
            ))}
          </ul>
        </div>
      </div>
      <div
        onClick={() => setIsAccount((prev) => !prev)}
        className="fixed inset-0 z-0 cursor-default"
      ></div>
    </React.Fragment>
  )
}

function DropdownLink({ link, setIsAccount }) {
  return (
    <li>
      <a
        href="#"
        onClick={() => setIsAccount((prev) => !prev)}
        className="block py-2 px-8 font-medium hover:bg-color-7 transition ease-in-out duration-100"
      >
        {link}
      </a>
    </li>
  )
}

export default AccountDropdown
