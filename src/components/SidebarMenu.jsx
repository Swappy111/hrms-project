import { ClosedCaption, EqualApproximatelyIcon, FolderClosed, LogOut, Sidebar, X } from 'lucide-react'
import React from 'react'

const SidebarMenu = ({isOpen, closeSidebar}) => {
   const menu = ["Dashboard", "Employees", "Attendance", "Leaves", "Salary", "Reports"];

  return (  
    <>
   {isOpen ? 
   <div className='fixed bg-[var(--bg-primary)] border border-t-0 border-r-gray-300 dark:border-r-blue-800 h-screen w-full p-[0px_20px] transition-all duration-200'>
        <div className='flex items-center justify-between space-x-2 p-[10px_0px] text-[25px] font-bold'>
          <div>
            <Sidebar className='dark:text-[#00B4D8] size-[25px] mr-2 mb-1' />
          <span className=' dark:text-[var(--text-primary)]'>Dashboard</span>
          </div>
          <button><X onClick={closeSidebar} className='dark:text-[var(--text-primary)] hover:text-[#00B4D8] border rounded' /></button>
        </div>
        <ul className='flex flex-col gap-2 p-[10px_0px]'>
          {menu.map((item, index) => (
            <>
            <li key={index} onClick={closeSidebar} className='flex flex-row items-center border border-gray-200 dark:border-blue-900 p-2 rounded hover:bg-gray-300 dark:hover:bg-[#00B4D8]  shadow-lg w-auto '>
              <EqualApproximatelyIcon className='mr-[5px] size-[20px] lg:size-[24px] dark:text-[#00B4D8]' /> <span className='dark:text-[var(--text-primary)] '>{item}</span>
            </li>
              </>
          ))}
          <button onClick={closeSidebar} className='flex flex-row items-center border border-gray-200 dark:border-blue-900 p-2 rounded hover:bg-gray-300 dark:hover:bg-[#00B4D8] shadow-lg  '>
            <LogOut className="sm:size-[18px] size-[18px] dark:text-[#00B4D8]  mr-2 group-hover:text-black dark:group-hover:text-black"/> <span className="text-[var(--text-primary)] group-hover:text-black dark:group-hover:text-black">Logout</span> 
          </button>
        </ul>
    </div>
    :
          <div className='hidden sm:block bg-[var(--bg-primary)] border border-t-0 border-r-gray-300 dark:border-r-blue-800 h-screen lg:w-[225px] sm:w-auto lg:p-[0px_20px] sm:p-[0px_10px] transition-all duration-200'>
        <div className='flex items-center justify-center lg:space-x-2 p-[10px_0px] text-[25px] font-bold'>
          <Sidebar className='dark:text-[#00B4D8]' />
          <span className='lg:block hidden dark:text-[var(--text-primary)]'>Dashboard</span>
        </div>
        <ul className='flex flex-col gap-2 p-[10px_0px]'>
          {menu.map((item, index) => (
            <li key={index} className='flex flex-row items-center border border-gray-200 dark:border-blue-900 p-2 rounded hover:bg-gray-300 dark:hover:bg-[#00B4D8]  shadow-lg w-auto '>
              <EqualApproximatelyIcon className='mr-[5px] size-[15px] lg:size-[24px] dark:text-[#00B4D8]' /> <span className='lg:block hidden dark:text-[var(--text-primary)] '>{item}</span>
            </li>
          ))}
        </ul>
    </div>
    }
    </>
  )
}

export default SidebarMenu
