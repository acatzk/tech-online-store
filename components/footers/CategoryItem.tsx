import { IFooter } from 'mock'

interface CategoryItemProps {
  links: IFooter | any
  address: Object | any
}

const CategoryItem: React.FC<CategoryItemProps> = ({ links, address }) => {
  return (
    <nav className="mt-5">
      {links &&
        links?.map(({ title, href }, j) => (
          <ul key={j} className="py-1 font-light">
            <li>
              <a
                href={href}
                className="block hover:text-color-5 transition ease-in-out duration-150"
              >
                {title}
              </a>
            </li>
          </ul>
        ))}
      {address && (
        <div className="font-light flex flex-col space-y-1">
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
    </nav>
  )
}

export default CategoryItem
