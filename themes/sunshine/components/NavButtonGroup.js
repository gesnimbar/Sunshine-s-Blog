
import React from 'react'
import Link from 'next/link'

/**
 * 首页导航大按钮组件
 * @param {*} props
 * @returns
 */
const NavButtonGroup = (props) => {
  const { categories } = props

  return <nav id='home-nav-button' className={'h-40 md:h-40 md:mt-6 xl:mt-6 px-5 py-2 mt-6 flex flex-wrap max-w-7xl space-y-2 md:space-y-0 md:flex justify-center max-h-40 overflow-auto'}>
    {categories.map(category => {
      return <Link key={`${category.name}`} title={`${category.name}`} href={`/category/${category.name}`} passHref>
            <a className='text-center w-full md:mx-6 md:w-40 h-14 justify-center items-center flex border-0 cursor-pointer rounded-md border-2 border-gray-100 glassmorphism drop-shadow-[0_35px_35px_rgba(1,1,1,1)]  hover:bg-white hover:text-black duration-200 font-bold hover:scale-105 transform'>{category.name}</a>
        </Link>
    })}
  </nav>
}
export default NavButtonGroup
