import { EqualApproximatelyIcon, Sidebar } from 'lucide-react'
import React from 'react'

const SidebarMenu = () => {
   const menu = ["Dashboard", "Employees", "Attendance", "Leaves", "Salary", "Reports"];

  return (  
    <div className='hidden sm:block bg-[var(--bg-primary)] border border-t-0 border-r-gray-300 dark:border-r-blue-800 h-screen lg:w-[225px] sm:w-auto lg:p-[0px_20px] sm:p-[0px_10px] transition-all duration-200'>
        <div className='flex items-center justify-center lg:space-x-2 p-[10px_0px] text-[25px] font-bold'>
          <Sidebar className='' />
          <span className='lg:block hidden dark:text-[var(--text-primary)]'>Dashboard</span>
        </div>
      <ul className='flex flex-col gap-2 p-[10px_0px]'>
        {menu.map((item, index) => (
          <li key={index} className='flex flex-row items-center border border-gray-200 dark:border-blue-900 p-2 rounded hover:bg-gray-300 dark:hover:bg-[#00B4D8]  shadow-lg w-auto '>
             <EqualApproximatelyIcon className='mr-[5px] size-[15px] lg:size-[24px]' /> <span className='lg:block hidden dark:text-[var(--text-primary)] '>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarMenu
