'use client'
import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeCotext } from '../Context/ThemeContextProvider'


const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeCotext)
  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4  flex justify-between items-center  dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
     <div className="flex px-4 py-3 overflow-hidden font-[sans-serif]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192.904 192.904"
    width="20px"
    className="fill-gray-400 mr-3"
  >
    <path d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
  </svg>
  <input
    type="email"
    placeholder="Type to search..."
    className="w-full outline-none text-md bg-transparent text-gray-400 dark:text-gray-400"
  />
</div>


        <button className='text-2xl text-dark' onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
    </div>
  )
}

export default Navbar;