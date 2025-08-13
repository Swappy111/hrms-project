import { HamburgerIcon, LogOut, Menu, Moon, Sun } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemProvider";

const Navbar = ({ openSidebar}) => {
  const {theme, handleToggleTheme} = use(ThemeContext);
  return (
    <>
      <nav>
        <div className="flex justify-between items-center sm:p-[10px_30px] p-[10px_10px] bg-[var(--bg-primary)] text-[var(--text-primary)] border border-t-0 border-l-0 border-r-0 border-b-gray-300 dark:border-b-blue-800 duration-200 transition-all">
            <h1 className=" sm:text-[25px] text-[20px] sm:font-bold font-semibold"> <span className="sm:hidden inline-block"><Menu onClick={openSidebar}/></span> Welcome, <span className="font-light sm:text-xl text-lg">UserName</span></h1>
            <div className="flex items-center">
                <button onClick={handleToggleTheme} className="sm:p-[3px_6px] p-[2px_6px] sm:mr-2 mr-1 border rounded hover:bg-gray-200">
                {theme === "light" ?  <Moon className="sm:size-[20px] size-[15px]"/> : <Sun className="sm:size-[20px] size-[15px]"/> }
                </button>
                <button className="sm:p-[3px_10px] p-[6px_10px] hidden border rounded bg-[var(--accent)] text-[var(--bg-primary)] sm:flex items-center gap-2 hover:bg-blue-950 duration-200 transition-all"> <span className="hidden sm:block">Logout</span> <LogOut className="sm:size-[18px] size-[18px]"/></button>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
