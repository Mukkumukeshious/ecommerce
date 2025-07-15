import path from 'path'
import React from 'react'
import { CiShoppingBasket } from "react-icons/ci";

const Header = () => {
    const MenuList = [
        {
            name:"Home",
            path:"/home"
        },
        {
            name:"Store",
            path:"/store"
        },
        {
            name:"Explore",
            path:"/explore"
        }
    ]
  return (
    <div className='flex p-4 px-8 md:px-32 lg:px-48 justify-between items-center bg-gray-600 text-white '>
      <h1 className='font-bold text-lg '>NepalEcom</h1>
      <ul className='flex gap-5 font-semibold'>
        {MenuList.map((menu, index)=>(
            <li className='cursor-pointer hover:text-blue-500 p-1 px-2' key={index}>{menu?.name}</li>
        ))}
      </ul>

      <div className='flex gap-5 items-center '>
        <div className='text-2xl cursor-pointer hover:text-blue-500 p-1 px-2'>
          <CiShoppingBasket />
        </div>
        
        <button className='cursor-pointer hover:text-blue-500 p-1 px-2'>Login</button>
      </div>
    </div>
  )
}

export default Header
