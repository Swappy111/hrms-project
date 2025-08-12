import React, { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

const ThemProvider = ({children}) => {
    const [theme,setTheme] = useState("light");
    const handleToggleTheme = () =>{
        // setTheme((prevThem)=>(prevThem === "light" ? "dark" : "light"));
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark")
        localStorage.setItem("theme", newTheme);
    }

    useEffect(()=>{
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      }
    },[])
  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme,handleToggleTheme}}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemProvider;
