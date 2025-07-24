import { useState } from "react";
import { NavLinks } from "../../constants/NavLinks";
import DarkMode from "./DarkMode";
import { IoClose, IoMenu } from "react-icons/io5";
import { logo } from "../../images";
import { FaPhone } from "react-icons/fa6";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="shadow-md relative dark:bg-black dark:text-white bg-white mt-4">
      <div className="container">
        <div className="flex items-center justify-between h-10">
          <div className="hidden sm:flex  items-center gap-3 font-semibol">
            <FaPhone />
            <span className="hover:text-primary">+977 9810474665</span>
          </div>
          <div>
            <img
              src={logo}
              alt=" logo "
              className="w-10 top-0 absolute sm:left-1/2 "
            />
          </div>
          <ul className="hidden sm:flex gap-8 items-center">
            {/* <li><a href="/#services">Services</a></li>
            <li> <a href="/#about">about</a></li>
            <li><a href="/#join">join</a></li> */}
            {/* {["home", "services"].map((data) => (
              <li> <a href={data}>{data}</a ></li>
            ))} */}
            {NavLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className=" font-openSans capitalize font-semibold
                        hover:text-primary cursor-pointer duration-500 "
                >
                  {data.name}
                </a>
              </li>
            ))}
            <DarkMode />
          </ul>
          <div className="flex sm:hidden gap-4 py-6 justify-center">
            <DarkMode />
            {showMenu ? (
              <IoClose
                className="text-2xl cursor-pointer "
                onClick={toogleMenu}
              />
            ) : (
              <IoMenu
                className="text-2xl cursor-pointer "
                onClick={toogleMenu}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
