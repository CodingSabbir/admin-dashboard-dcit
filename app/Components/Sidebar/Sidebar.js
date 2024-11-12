import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog } from 'react-icons/fa';

const Sidebar = () => {
	return (
		<div className="bg-gray-900 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 ">
			<div className='flex items-center mt-4 gap-3 px-2'>
			<Image className='w-7 hidden md:block' src="/img/logo-DHSNsfh_.png" alt='dashboard-logo' width={400} height={400}/>	
			<h1 className='text-2xl font-bold hidden md:block text-white  text-center '>DCIT</h1>
			</div>
				
			<ul className='flex flex-col mt-5 text-xl'>
				<Link href={"/authentication/signin"}>
				<li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-gray-800 text-white'>
					<FaTachometerAlt />
					<span className='hidden md:inline'>Dashboard</span>
				</li>
				</Link>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        text-white hover:bg-gray-800">
					<FaShoppingCart />
					<span className="hidden md:inline ">Employee</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        text-white hover:bg-gray-800">
					<FaUsers />
					<span className="hidden md:inline ">Department</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        text-white hover:bg-gray-800">
					<FaUser />
					<span className="hidden md:inline ">Job</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        text-white hover:bg-gray-800">
					<FaBox />
					<span className="hidden md:inline ">Attendance</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        text-white hover:bg-gray-800">
					<FaCog />
					<span className="hidden md:inline ">Leave_Request</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        text-white hover:bg-gray-800">
					<FaCog />
					<span className="hidden md:inline ">Leave_Request</span>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar