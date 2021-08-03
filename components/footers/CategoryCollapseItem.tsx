import React from 'react'
import { IFooter } from 'mock'

interface CategoryCollapseItemProps {
  links: IFooter | any
  address: Object | any
}

const CategoryCollapseItem: React.FC<CategoryCollapseItemProps> = ({
  links,
  address,
}) => {
  return (
    <>
      {links &&
        links.map(({ title, href }, j) => (
          <nav key={j} className="text-sm font-light">
            <ul className="flex flex-col px-2 py-1">
              <li>
                <a
                  href={href}
                  onClick={(e) => e.preventDefault()}
                  className="block hover:text-color-5 transition ease-in-out duration-150"
                >
                  {title}
                </a>
              </li>
            </ul>
          </nav>
        ))}
      {address && (
        <div className="font-light text-sm flex flex-col space-y-1">
          <div>Address: {address.location}</div>
          <div>
            Phone: <span className="text-color-4">{address.phones}</span>
          </div>
          <div>{address.dailySchedule}</div>
          <div>Friday: {address.fridaySchedule}</div>
          <div>Saturday: {address.saturdaySchedule}</div>
          <div>
            email: <span className="text-color-4">{address.email}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default CategoryCollapseItem
