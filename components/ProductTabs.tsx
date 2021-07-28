import React from 'react'
import { ITab } from 'mock'

interface ProductTabsProps {
  tabs: Array<ITab>
}

const ProductTabs: React.FC<ProductTabsProps> = ({ tabs }) => {
  return (
    <div className="inline-flex flex-wrap items-center font-semibold text-sm space-x-6">
      {tabs.map(({ title }, i) => (
        <a
          key={i}
          href="#"
          className={`border-b-2 border-transparent ${
            i === 0 ? ' text-black border-color-3' : 'text-[#838383]'
          } hover:text-black transition ease-in-out duration-150`}
        >
          {title}
        </a>
      ))}
    </div>
  )
}

export default ProductTabs
