import React from 'react'
import { IFooter } from 'mock'
import CategoryItem from './CategoryItem'

interface CollapseList {
  footerLinks: Array<IFooter> | any
}

const CategoryList: React.FC<CollapseList> = ({ footerLinks }) => {
  return (
    <section className="grid grid-cols-5 py-10">
      {footerLinks.map(({ title, links, address }, i) => (
        <div key={i}>
          <div className="flex flex-col text-sm">
            <h1 className="font-semibold text-color-5">{title}</h1>
            <CategoryItem links={links} address={address} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default CategoryList
