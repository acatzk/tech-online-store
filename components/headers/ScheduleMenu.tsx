import React from 'react'
import { Location } from 'utils/Icons'
import { FiClock } from 'react-icons/fi'

interface ScheduleMenuProps {
  setIsSchedule: Function
}

const ScheduleMenu: React.FC<ScheduleMenuProps> = ({ setIsSchedule }) => {
  return (
    <React.Fragment>
      <div className="fixed container max-w-md left-0 mt-2 rounded-none sm:rounded shadow-xl mx-0 sm:mx-4 z-10 bg-white text-black">
        <div className="absolute w-5 h-5 bg-white rotate-45 -top-0.5 left-32"></div>
        <ul className="relative divide-y-2 divide-gray-300">
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
              <p className="font-medium">
                Address: 1234 Street Address, City Address, 1324
              </p>
            </div>
          </li>
          <li className="flex items-center flex-col justify-center py-4 space-y-1">
            <h3 className="mr-16 font-medium">
              Phones: <span className="text-color-3">(00) 1234 5678</span>
            </h3>
            <h3 className="mr-12 font-medium">
              E-mail: <span className="text-color-3">shop@email.com</span>
            </h3>
          </li>
        </ul>
      </div>
      <div
        onClick={() => setIsSchedule((prev) => !prev)}
        className="fixed inset-0 z-0 cursor-default"
      ></div>
    </React.Fragment>
  )
}

export default ScheduleMenu
