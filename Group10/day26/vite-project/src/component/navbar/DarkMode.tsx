import { GoSun } from "react-icons/go";
import { FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";


const DarkMode = () => {
    const [theme,setTheme]= useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme"):"light"

    );

    useEffect(()=>{
        const element =document.documentElement;
        if(theme==="dark"){

            localStorage.setItem("theme","dark");
            element.classList.add("dark");
        }
        else{
            localStorage.setItem("theme","light")
            element.classList.remove("dark")
        }
    });
    // to store value use useState and to run automatically use useEffect
  return (
    <div>
        {theme=="dark"?(
             <GoSun  onClick={()=>setTheme("light")} className="" />
        ):(
             <FiMoon onClick={()=>setTheme("dark")} />
        )}
    </div>
  )
}

export default DarkMode
