import { IFooter } from 'mock'
import React, { useState } from 'react'
import CategoryCollapseItem from './CategoryCollapseItem'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

interface CollapseListProps {
  footerLinks: Array<IFooter> | any
}

const CollapseList: React.FC<CollapseListProps> = ({ footerLinks }) => {
  return footerLinks.map(({ title, links, address }, i) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)

    return (
      <section key={i} className="my-4">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`inline-flex items-center justify-between w-full pt-3 pb-2.5 border-b ${
            open ? 'border-transparent' : 'border-color-5'
          }`}
        >
          <h1 className="text-xs font-medium">{title}</h1>
          {open ? (
            <BiChevronUp className="w-4 h-4" />
          ) : (
            <BiChevronDown className="w-4 h-4" />
          )}
        </button>
        {open && <CategoryCollapseItem links={links} address={address} />}
      </section>
    )
  })
}

export default CollapseList
